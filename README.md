
# Hikvision to Feature Service

API untuk menghubah data JSON menjadi sebuah feature service menggunakan `NodeJS`, `Express`, `Body Parser`





![Logo](https://www.jababeka.com/wp-content/uploads/2018/11/IMG-6651.png)


## 2 Ada jenis data yang diprocess

#### Object Detection
- Deteksi Jenis Kendaraan (Vehicle Information)
- Deteksi kearamaian (Crowd Detection)
- Deteksi Gerakan (Motion Detection, GeoFencing)

#### Semantic Segmentation
- Deteksi Pergerakan Kendaraan (Vehicle tracking - GeoFencing)
- Deteksi tingkah laku - Object mencurigakan (Behaviour Detection)
- Deteksi level ketinggian air (khusus untuk IoT tidak di integrasikan di Repo Ini)


## Installation

Install package with npm

```bash
  npm install
```
    
## Run Locally

#### Running in Development
```bash
  npm run dev
```

#### Running in Production
```bash
  npm start
```
aktif di `localhost:3000`, `PORT` dapat dikonfigurasi pada environment variable.

#### Running in Test
```bash
  npm test

  # Watch repo
  npm run test:watch
```
## Authors

<img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30" height="30">[@Muharram Syah](https://linkedin.com/in/muharram_syah)