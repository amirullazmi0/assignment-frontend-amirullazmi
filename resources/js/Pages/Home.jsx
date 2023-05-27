import { Head, router } from '@inertiajs/react';
import { data } from 'autoprefixer';
import React, { useState } from 'react'

export default function Home(props) {
    const [mahasiswa, setMahasiswa] = useState([
        { id: '1', nama: 'mahasiswa_1', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '2', nama: 'mahasiswa_2', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '3', nama: 'mahasiswa_3', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '4', nama: 'mahasiswa_4', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '5', nama: 'mahasiswa_5', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '6', nama: 'mahasiswa_5', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '7', nama: 'mahasiswa_7', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '8', nama: 'mahasiswa_8', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '9', nama: 'mahasiswa_9', ap1: '', ap2: '', ap3: '', ap4: '' },
        { id: '10', nama: 'mahasiswa_10', ap1: '', ap2: '', ap3: '', ap4: '' },
    ])
    const handleAp1Change = (e, i) => {
        const value = e.target.value;
        const updatedMahasiswa = [...mahasiswa];
        updatedMahasiswa[i] = {
            ...updatedMahasiswa[i],
            ap1: value
        };

        setMahasiswa(updatedMahasiswa);
    };
    const handleAp2Change = (e, i) => {
        const value = e.target.value;
        const updatedMahasiswa = [...mahasiswa];
        updatedMahasiswa[i] = {
            ...updatedMahasiswa[i],
            ap2: value
        };

        setMahasiswa(updatedMahasiswa);
    };
    const handleAp3Change = (e, i) => {
        const value = e.target.value;
        const updatedMahasiswa = [...mahasiswa];
        updatedMahasiswa[i] = {
            ...updatedMahasiswa[i],
            ap3: value
        };

        setMahasiswa(updatedMahasiswa);
    };
    const handleAp4Change = (e, i) => {
        const value = e.target.value;
        const updatedMahasiswa = [...mahasiswa];
        updatedMahasiswa[i] = {
            ...updatedMahasiswa[i],
            ap4: value
        };

        setMahasiswa(updatedMahasiswa);
    };

    const handlePostJson = () => {
        const aspek_penilaian_1 =
            mahasiswa.map((m) => {
                return (
                    { nama: m.nama, nilai: m.ap1 }
                )
            })

        const aspek_penilaian_2 =
            mahasiswa.map((m) => {
                return (
                    { nama: m.nama, nilai: m.ap2 }
                )
            })

        const aspek_penilaian_3 =
            mahasiswa.map((m) => {
                return (
                    { nama: m.nama, nilai: m.ap3 }
                )
            })

        const aspek_penilaian_4 =
            mahasiswa.map((m) => {
                return (
                    { nama: m.nama, nilai: m.ap4 }
                )
            })

        const data = {
            aspek_penilaian_1, aspek_penilaian_2, aspek_penilaian_3, aspek_penilaian_4
        }

        router.post('/sendJson', data)
    }
    return (
        <>
            <Head title={props.title} />
            <div className='min-h-screen flex justify-center items-center'>
                <div className="card m-7 shadow-md">
                    <div className="card-body">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Aspek Penilaian 1</th>
                                        <th>Aspek Penilaian 2</th>
                                        <th>Aspek Penilaian 3</th>
                                        <th>Aspek Penilaian 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mahasiswa.map((m) => {
                                        const i = m.id - 1;
                                        return (
                                            <tr className='text-center' key={m.id}>
                                                <th>{m.nama}</th>
                                                <td>
                                                    <select defaultValue={"1"} onChange={(e) => handleAp1Change(e, i)} className="select select-bordered w-full max-w-xs">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select defaultValue={"1"} onChange={(e) => handleAp2Change(e, i)} className="select select-bordered w-full max-w-xs">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select defaultValue={"1"} onChange={(e) => handleAp3Change(e, i)} className="select select-bordered w-full max-w-xs">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select defaultValue={"1"} onChange={(e) => handleAp4Change(e, i)} className="select select-bordered w-full max-w-xs">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                        <option value={7}>7</option>
                                                        <option value={8}>8</option>
                                                        <option value={9}>9</option>
                                                        <option value={10}>10</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <button className="btn btn-sm btn-primary" onClick={() => handlePostJson()}>
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
