import React from "react";

export default function KKList({ data, onEdit, onDelete }) {
  if (data.length === 0) {
    return (
      <div className="no-data">
        <p>📋 Belum ada data Kartu Keluarga.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="kk-table">
        <thead>
          <tr>
            <th>No. KK</th>
            <th>Kepala Keluarga</th>
            <th>Alamat</th>
            <th>RT/RW</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((kk) => (
            <tr key={kk.id}>
              <td>{kk.noKK}</td>
              <td>{kk.kepalaKeluarga}</td>
              <td>{kk.alamat}</td>
              <td>{kk.rt}/{kk.rw}</td>
              <td className="aksi">
                <button className="btn btn-edit" onClick={() => onEdit(kk)}>
                  ✏️ Edit
                </button>
                <button className="btn btn-delete" onClick={() => onDelete(kk.id)}>
                  🗑️ Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
