import React from "react";

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default class FormElement extends React.Component {
  state = {
    nama : '',
    jurusan : '',
    gender : '',
    alamat : '',
    member : false

  }
    render() {
    return (
      <form style={formStyles}>
        <label htmlFor="nama">
          Nama:
          <input type="text" id="nama" onChange={e => this.setState ({nama : e.target.value},() => console.log (this.state) )} />
        </label>
        <br />
        <label htmlFor="jurusan">
          Jurusan:
          <select id="jurusan">
            <option value="">Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Hukum">Hukum</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
          </select>
        </label>
        <br />
        <fieldset>
          <legend>Jenis Kelamin:</legend>
          <label htmlFor="laki-laki">
            Laki-laki
            <input type="radio" id="laki-laki" name="jenis-kelamin" value="Laki-laki" />
          </label>
          <br />
          <label htmlFor="perempuan">
            Perempuan
            <input type="radio" id="perempuan" name="jenis-kelamin" value="Perempuan" />
          </label>
        </fieldset>
        <br />
        <label htmlFor="alamat">
          Alamat:
          <textarea id="alamat" cols="30" rows="10"></textarea>
        </label>
        <br />
        <label htmlFor="member">
          Member:
          <input type="checkbox" id="member" value={true} />
        </label>
        <button type="submit">
            Submit
        </button>
      </form>
    );
  }
}
