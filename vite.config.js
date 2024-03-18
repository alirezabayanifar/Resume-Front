import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig(() => {
    return {
        build: {
            rollupOptions: {
                input: {
                    index: resolve(__dirname, 'index.html'),
                    404: resolve(__dirname, 'pages/404.html'),
                    about: resolve(__dirname, 'pages/about.html'),
                    art: resolve(__dirname, 'pages/art.html'),
                    contact: resolve(__dirname, 'pages/contact.html'),
                    doctor: resolve(__dirname, 'pages/doctor.html'),
                    food: resolve(__dirname, 'pages/food.html'),
                    infographic: resolve(__dirname, 'pages/infographic.html'),
                    infographic_archive: resolve(__dirname, 'pages/infographic-archive.html'),
                    news_archive: resolve(__dirname, 'pages/news-archive.html'),
                    picture_archive: resolve(__dirname, 'pages/picture-archive.html'),
                    news: resolve(__dirname, 'pages/news.html'),
                    picture: resolve(__dirname, 'pages/picture.html'),
                    single_infographic: resolve(__dirname, 'pages/single-infographic.html'),
                    single_news: resolve(__dirname, 'pages/single-news.html'),
                    single_picture: resolve(__dirname, 'pages/single-picture.html'),
                    single_video: resolve(__dirname, 'pages/single-video.html'),
                    sport: resolve(__dirname, 'pages/sport.html'),
                    video: resolve(__dirname, 'pages/video.html'),
                    video_archive: resolve(__dirname, 'pages/video-archive.html'),
                }
            }
        }
    }
})