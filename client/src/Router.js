import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
// Импортируйте ваши страницы
import HomePage from './components/pages/home/HomePage';
import GalleryPage from './components/pages/gallery/GalleryPage';
import BlogPage from './components/pages/blog/BlogPage';
import AboutMePage from './components/pages/about/AboutMePage';
import AddButterflyPage from './components/pages/gallery/AddButterflyForm';

export default function ButterflyRouter() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Бабочки
            </Typography>
            <Button color="inherit" component={Link} to="/" sx={{ my: 2, color: 'white', display: 'block' }}>
              Главная
            </Button>
            <Button color="inherit" component={Link} to="/gallery" sx={{ my: 2, color: 'white', display: 'block' }}>
              Галерея
            </Button>
            <Button color="inherit" component={Link} to="/blog" sx={{ my: 2, color: 'white', display: 'block' }}>
              Блог
            </Button>
            <Button color="inherit" component={Link} to="/about-me" sx={{ my: 2, color: 'white', display: 'block' }}>
              Обо мне
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/addButterfly" element={<AddButterflyPage />} /> {/* Добавление маршрута для страницы добавления бабочки */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </>
  );
}
