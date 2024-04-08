import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function ButterflyCard({ butterfly }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {butterfly.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {butterfly.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Вид: {butterfly.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Цвет: {butterfly.color}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Место обитания: {butterfly.habitat}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Распространение: {butterfly.distribution}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Статус: {butterfly.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Дата обнаружения: {new Date(butterfly.discoveryDate).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
