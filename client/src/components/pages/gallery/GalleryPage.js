import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@mui/material'; // Импорт компонентов Button из Material-UI
import ButterflyCard from './ButterflyCard';
import { Link } from 'react-router-dom'; // Импорт компонента Link для перехода по маршрутам
import axios from 'axios'; // Импорт Axios для выполнения HTTP-запросов

export default function GalleryPage() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к вашему серверу для получения данных о бабочках
    // Пример запроса к API:
    axios.get('/api/butterflies')
      .then(response => {
        setButterflies(response.data);
      })
      .catch(error => {
        console.error('Error fetching butterflies:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Галерея бабочек
      </Typography>
      <Grid container spacing={2}>
        {butterflies.map((butterfly) => (
          <Grid item xs={12} sm={6} md={4} key={butterfly._id}>
            <ButterflyCard butterfly={butterfly} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" component={Link} to="/gallery/addButterfly">
        Добавить бабочку
      </Button> {/* Кнопка для перехода на страницу добавления бабочки */}
    </div>
  );
}
