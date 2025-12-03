import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PhotoGallery.css';

// Import all images
import img1 from '../assets/galeria/20231023_103850.jpg';
import img2 from '../assets/galeria/20240828_115705.jpg';
import img3 from '../assets/galeria/20250822_101850.jpg';
import img4 from '../assets/galeria/20251023_152526.jpg';
import img5 from '../assets/galeria/20251029_140131.jpg';
import img6 from '../assets/galeria/IMG-20211125-WA0050.jpg';
import img7 from '../assets/galeria/IMG-20211125-WA0054.jpg';
import img8 from '../assets/galeria/IMG-20220311-WA0019.jpg';
import img9 from '../assets/galeria/IMG-20220318-WA0097.jpg';
import img10 from '../assets/galeria/IMG-20220729-WA0016.jpg';
import img11 from '../assets/galeria/IMG-20221026-WA0097.jpg';
import img12 from '../assets/galeria/IMG-20221206-WA0060.jpg';
import img13 from '../assets/galeria/IMG-20221220-WA0000.jpg';
import img14 from '../assets/galeria/IMG-20221220-WA0115.jpg';
import img15 from '../assets/galeria/IMG-20231009-WA0064.jpg';
import img16 from '../assets/galeria/IMG_20190409_181544.jpg';
import img17 from '../assets/galeria/IMG_20190603_111310.jpg';
import img18 from '../assets/galeria/IMG_20190624_102702.jpg';
import img19 from '../assets/galeria/IMG_20211030_081948.jpg';
import img20 from '../assets/galeria/IMG_20220901_104708.jpg';

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
];

export const PhotoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, itemsPerPage]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getVisibleImages = () => {
        const visibleImages = [];
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % images.length;
            visibleImages.push({ image: images[index], index });
        }
        return visibleImages;
    };

    return (
        <section id="gallery" className="photo-gallery">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Nossa Galeria</h2>
                    <p>Confira alguns de nossos trabalhos e projetos realizados</p>
                </motion.div>

                <div className="carousel-container">
                    <div className="carousel-track">
                        <AnimatePresence mode="popLayout">
                            {getVisibleImages().map(({ image, index }, i) => (
                                <motion.div
                                    key={`${index}-${i}`}
                                    className="carousel-item glass-card"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.5 }}
                                    layout
                                >
                                    <img src={image} alt={`Projeto JT Engenharia ${index + 1}`} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">
                        &#10094;
                    </button>
                    <button className="carousel-btn next" onClick={nextSlide} aria-label="Próximo">
                        &#10095;
                    </button>
                </div>

                <div className="carousel-indicators">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                            aria-label={`Ir para imagem ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
