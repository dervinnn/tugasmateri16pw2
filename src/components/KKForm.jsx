import React, { useState, useEffect } from "react";

export default function KKForm({ onSave, editing, onCancel }) {
  const [kk, setKK] = useState({
    id: Date.now(),
    kepalaKeluarga: "",
    alamat: "",
    rt: "",
    rw: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
    anggota: [],
  });

  const [anggota, setAnggota] = useState({ nama: "", nik: "", hubungan: "" });

  useEffect(() => {
    if (editing) setKK(editing);
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKK({ ...kk, [name]: value });
  };

  const handleAnggotaChange = (e) => {
    const { name, value } = e.target;
    setAnggota({ ...anggota, [name]: value });
  };

  const handleTambahAnggota = () => {
    if (!anggota.nama || !anggota.nik || !anggota.hubungan) return alert("Lengkapi data anggota!");
    setKK({ ...kk, anggota: [...kk.anggota, anggota] });
    setAnggota({ nama: "", nik: "", hubungan: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!kk.kepalaKeluarga || !kk.alamat) return alert("Isi data KK terlebih dahulu!");
    onSave(kk);
    setKK({
      id: Date.now(),
      kepalaKeluarga: "",
      alamat: "",
      rt: "",
      rw: "",
      kecamatan: "",
      kabupaten: "",
      provinsi: "",
      anggota: [],
    });
  };

  return (
    <div className="form-card">
      <h2>🧾 Tambah Data Kartu Keluarga</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input name="kepalaKeluarga" value={kk.kepalaKeluarga} onChange={handleChange} placeholder="Kepala Keluarga" />
          <input name="alamat" value={kk.alamat} onChange={handleChange} placeholder="Alamat" />
          <input name="rt" value={kk.rt} onChange={handleChange} placeholder="RT" />
          <input name="rw" value={kk.rw} onChange={handleChange} placeholder="RW" />
        </div>

        <div className="form-row">
          <input name="kecamatan" value={kk.kecamatan} onChange={handleChange} placeholder="Kecamatan" />
          <input name="kabupaten" value={kk.kabupaten} onChange={handleChange} placeholder="Kabupaten" />
          <input name="provinsi" value={kk.provinsi} onChange={handleChange} placeholder="Provinsi" />
        </div>

        <h3> Anggota Keluarga</h3>
        <div className="form-row">
          <input name="nama" value={anggota.nama} onChange={handleAnggotaChange} placeholder="Nama" />
          <input name="nik" value={anggota.nik} onChange={handleAnggotaChange} placeholder="NIK" />
          <input name="hubungan" value={anggota.hubungan} onChange={handleAnggotaChange} placeholder="Hubungan" />
          <button type="button" className="btn btn-tambah" onClick={handleTambahAnggota}>
            ➕ Tambah
          </button>
        </div>

        <div className="anggota-list">
          {kk.anggota.map((a, i) => (
            <div key={i} className="anggota-item">
              {a.nama} - {a.nik} ({a.hubungan})
            </div>
          ))}
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn btn-simpan">💾 Simpan</button>
          {editing && (
            <button type="button" className="btn btn-batal" onClick={onCancel}>❌ Batal</button>
          )}
        </div>
      </form>
    </div>
  );
}
