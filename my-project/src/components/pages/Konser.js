import React from 'react'
import '../../App.css';
import "../styles/konser.css"
import Footer from '../Footer';
import Cards from '../Cards';
import Boxes from '../Boxes';


export default function Konser() {
    return (
        <div className='konser-page'>


            <div className='hero_'>

                <div className="container orta_kisim justify-content-between my-5">
                    <div className="row ">

                        <div className="col-sm-12 col-lg-6 col-md-6 bg-white">
                            <div className="tab-container">
                                <div className="tab-content">
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="fname">Şehir</label>
                                            <input type="text" className="form-control" id="fname" name="fname"
                                                placeholder="Şehir yazınız" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="lname">Mekan</label>
                                            <input type="text" className="form-control" id="lname" name="lname"
                                                placeholder="Mekan yazınız" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="gdate">Tür</label>
                                            <input type="date" className="form-control" id="gdate" name="gdate" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="rdate">Etkinlik Tarihi
                                            </label>
                                            <input type="date" className="form-control" id="rdate" name="rdate" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-warning my-4 col-sm-12">Konser Bileti Bul
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 d-none d-md-block">
                            <div className="card text-white arka mb-3">
                                <div className="card-header font-weight-bold">
                                    <h3>Tumbilet le Bilet Almak Çok
                                        Kolay</h3>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Müzik dolu bir geceye hazır olun! Tumbilet ile konser bileti satın alarak favori sanatçılarınızın muhteşem performansını kaçırmayın.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Boxes />

            <Cards />



            <Footer />
        </div>



    );
}


