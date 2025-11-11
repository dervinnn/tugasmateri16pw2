import React, { useState, useEffect } from "react";
import { loadData, saveData } from "./utils/storage";
import KKForm from "./components/KKForm";
import KKList from "./components/KKList";
import "./assets/style.css";

export default function App() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  // Saat pertama kali aplikasi dibuka -> ambil data dari localStorage
  useEffect(() => {
    setData(loadData());
  }, []);

  // Setiap data berubah -> simpan ke localStorage
  useEffect(() => {
    saveData(data);
  }, [data]);

  // Tambah atau update data KK
  const handleSave = (kk) => {
    if (editData) {
      // Jika sedang edit, ganti data lama dengan data baru
      setData(data.map((d) => (d.id === kk.id ? kk : d)));
      setEditData(null);
    } else {
      // Jika tambah baru
      setData([...data, kk]);
    }
  };

  // Hapus data KK
  const handleDelete = (id) => {
    if (confirm("Yakin ingin menghapus data ini?")) {
      setData(data.filter((d) => d.id !== id));
    }
  };

  // Edit data KK
  const handleEdit = (kk) => {
    setEditData(kk);
  };

  return (
    <div className="app-container">
      <h1 className="title">📋 Data Kartu Keluarga</h1>

      {/* Form input KK */}
      <KKForm onSave={handleSave} editData={editData} />

      {/* Daftar KK */}
      <KKList data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
