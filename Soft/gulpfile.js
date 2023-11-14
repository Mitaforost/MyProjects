import gulp from 'gulp'; // Модуль для автоматизации задач в рабочем процессе
import dartSass from 'sass'; // Реализация Dart Sass
import gulpSass from 'gulp-sass'; // Gulp плагин для компиляции Sass
import ttf2woff from 'gulp-ttf2woff'; // Gulp плагин для конвертации TTF-шрифтов в WOFF
import ttf2woff2 from 'gulp-ttf2woff2'; // Gulp плагин для конвертации TTF-шрифтов в WOFF2
const sass = gulpSass(dartSass); // Создание экземпляра Gulp-Sass с использованием Dart Sass
import autoprefixer from 'gulp-autoprefixer'; // Gulp плагин для автоматической установки префиксов
import cleanCSS from 'gulp-clean-css'; // Gulp плагин для минификации CSS
import concat from 'gulp-concat'; // Gulp плагин для объединения файлов
import uglify from 'gulp-uglify'; // Gulp плагин для минификации JavaScript
import imagemin from 'gulp-imagemin'; // Gulp плагин для оптимизации изображений
import { deleteAsync } from 'del'; // Модуль для удаления файлов и директорий
import browserSync from 'browser-sync'; // Модуль для создания локального сервера
import newer from 'gulp-newer'; // Gulp плагин для фильтрации новых или измененных файлов
import plumber from 'gulp-plumber'; // Gulp плагин для обработки ошибок при сборке проекта

// Create a reference to the deleteAsync function from the del module

const bs = browserSync.create();

const paths = {
    styles: 'src/scss/**/*.scss',
    scripts: 'src/js/**/*.js',
    images: 'src/img/**/*',
    fonts: 'src/fonts/**/*.ttf',
    html: 'src/**/*.html',
    dist: 'dist',
};

gulp.task('styles', () =>
    gulp.src(paths.styles)
        .pipe(plumber())
        .pipe(newer(`${paths.dist}/css`))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(`${paths.dist}/css`))
        .pipe(bs.stream())
);

gulp.task('scripts', () =>
    gulp.src(paths.scripts)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(`${paths.dist}/js`))
        .pipe(bs.stream())
);

gulp.task('images', () =>
    gulp.src(paths.images)
        .pipe(newer(`${paths.dist}/img`))
        .pipe(imagemin())
        .pipe(gulp.dest(`${paths.dist}/img`))
);

gulp.task('html', () =>
    gulp.src(paths.html)
        .pipe(newer(paths.dist))
        .pipe(gulp.dest(paths.dist))
        .pipe(bs.stream())
);

gulp.task('fonts', () =>
    gulp.src(paths.fonts)
        .pipe(newer(`${paths.dist}/fonts`))
        .pipe(ttf2woff())
        .pipe(gulp.dest(`${paths.dist}/fonts`))
        .pipe(gulp.src(paths.fonts))
        .pipe(ttf2woff2())
        .pipe(gulp.dest(`${paths.dist}/fonts`))
);

gulp.task('cleanDist', () => deleteAsync(paths.dist));

gulp.task('default', gulp.series('cleanDist', 'styles', 'scripts', 'images', 'html', 'fonts', () => {
    bs.init({
        server: {
            baseDir: paths.dist,
        },
    });

    gulp.watch(paths.styles, gulp.parallel('styles'));
    gulp.watch(paths.scripts, gulp.parallel('scripts'));
    gulp.watch(paths.images, gulp.parallel('images'));
    gulp.watch(paths.html, gulp.parallel('html'));
    gulp.watch(paths.fonts, gulp.parallel('fonts'));
    gulp.watch('src/*.html').on('change', bs.reload);
}));
