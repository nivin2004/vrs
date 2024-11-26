import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Modal,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const SectionManagement = () => {
  const { token } = useContext(AppContext);
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({
    name: "",
    description: "",
  });
  const [editSection, setEditSection] = useState(null);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/sections", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSections(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSections();
  }, [token]);

  const addSection = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/librarian/sections",
        newSection,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSections([...sections, res.data]);
      setNewSection({ name: "", description: "" });
      toast.success("Category added successfully");
    } catch (err) {
      const errorMessage = err.response?.data?.msg || "Error adding Category";
      console.error(err);
      toast.error(errorMessage);
    }
  };

  const handleDeleteClick = (section) => {
    setSelectedSection(section);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/librarian/sections/${selectedSection._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSections(
        sections.filter((section) => section._id !== selectedSection._id)
      );
      toast.success("Category deleted successfully");
      handleCloseDialog();
    } catch (err) {
      const errorMessage = err.response?.data?.msg || "Error deleting Category";
      console.error(err);
      toast.error(errorMessage);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedSection(null);
  };

  const updateSection = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/librarian/sections/${editSection._id}`,
        editSection,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSections(
        sections.map((section) =>
          section._id === editSection._id ? res.data : section
        )
      );
      setEditSection(null);
      setOpen(false);
      toast.success("Category updated successfully");
    } catch (err) {
      const errorMessage = err.response?.data?.msg || "Error updating Category";
      console.error(err);
      toast.error(errorMessage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSection({ ...newSection, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditSection({ ...editSection, [name]: value });
  };

  const handleEditOpen = (section) => {
    setEditSection(section);
    setOpen(true);
  };

  const handleEditClose = () => {
    setEditSection(null);
    setOpen(false);
  };

  return (
    <Container sx={{ marginTop: 5 }}>
      <TextField
        label="Category Name"
        name="name"
        value={newSection.name}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
        fullWidth
        required
      />
      <TextField
        label="Description"
        name="description"
        value={newSection.description}
        onChange={handleChange}
        sx={{ marginBottom: 2 }}
        fullWidth
      />
      <Button
        onClick={addSection}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        Add Category
      </Button>
      {sections.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ border: "1px solid #ccc", marginTop: 2, marginBottom: 10 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Category Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Date Created</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sections.map((section) => (
                <TableRow key={section._id}>
                  <TableCell>{section.name}</TableCell>
                  <TableCell>{section.description}</TableCell>
                  <TableCell>
                    {new Date(section.dateCreated).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditOpen(section)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteClick(section)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          color="textSecondary"
          variant="h6"
          component="p"
          gutterBottom
        >
          No categories available.
        </Typography>
      )}

      <Modal open={open} onClose={handleEditClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleEditClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="h6"
            component="h2"
            gutterBottom
          >
            Edit Category
          </Typography>
          <TextField
            label="Section Name"
            name="name"
            value={editSection?.name || ""}
            onChange={handleEditChange}
            sx={{ marginBottom: 2 }}
            fullWidth
            required
          />
          <TextField
            label="Description"
            name="description"
            value={editSection?.description || ""}
            onChange={handleEditChange}
            sx={{ marginBottom: 2 }}
            fullWidth
          />
          <Button
            onClick={updateSection}
            variant="contained"
            color="primary"
            sx={{ marginRight: 1 }}
          >
            Save
          </Button>
          <Button
            onClick={handleEditClose}
            variant="contained"
            color="secondary"
          >
            Cancel
          </Button>
        </Box>
      </Modal>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="confirm-delete-dialog"
        aria-describedby="confirm-delete-description"
      >
        <DialogTitle id="confirm-delete-dialog">{"Delete Section"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-delete-description">
            Are you sure you want to delete this category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SectionManagement;
