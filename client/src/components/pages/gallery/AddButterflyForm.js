import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

export default function AddButterflyForm({ onAddButterfly }) {
  const [formData, setFormData] = useState({
    name: '', description: '', species: '', color: '', size: '',
    habitat: '', distribution: '', discoveryDate: '', status: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/butterflies', formData);
      onAddButterfly(response.data);
      setFormData({
        name: '', description: '', species: '', color: '', size: '',
        habitat: '', distribution: '', discoveryDate: '', status: '',
      });
    } catch (error) {
      console.error('Error adding butterfly:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Добавление бабочки
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField name="name" label="Название" value={formData.name} onChange={handleChange} fullWidth required />
        <TextField name="description" label="Описание" value={formData.description} onChange={handleChange} multiline fullWidth required />
        <TextField name="species" label="Вид" value={formData.species} onChange={handleChange} fullWidth />
        <TextField name="color" label="Цвет" value={formData.color} onChange={handleChange} fullWidth />
        <TextField name="size" label="Размер" value={formData.size} onChange={handleChange} fullWidth />
        <TextField name="habitat" label="Место обитания" value={formData.habitat} onChange={handleChange} fullWidth />
        <TextField name="distribution" label="Распространение" value={formData.distribution} onChange={handleChange} fullWidth />
        <TextField name="discoveryDate" label="Дата обнаружения" type="date" value={formData.discoveryDate} onChange={handleChange} fullWidth />
        <TextField name="status" label="Статус" value={formData.status} onChange={handleChange} fullWidth />
        <Button type="submit" variant="contained" color="primary">Сохранить</Button>
      </form>
    </div>
  );
}
