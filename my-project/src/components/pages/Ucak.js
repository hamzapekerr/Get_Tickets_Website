import React from 'react'
import '../../App.css';
import "../styles/ucak.css"
import Footer from '../Footer';
import Cards from '../Cards';
import Boxes from '../Boxes';


export default function Ucak() {
    return (
        <div className='ucak-page'>


            <div className='heroo'>

                <div className="container orta_kisim justify-content-between my-5">
                    <div className="row ">

                        <div className="col-sm-12 col-lg-6 col-md-6 bg-white">
                            <div className="tab-container">
                                <div className="tab-content">
                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="fname">Nereden</label>
                                            <input type="text" className="form-control" id="fname" name="fname"
                                                placeholder="Şehir veya Havalimanı Yazın" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="lname">Nereye</label>
                                            <input type="text" className="form-control" id="lname" name="lname"
                                                placeholder="Şehir veya Havalimanı Yazın" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="gdate">Gidiş Tarihi</label>
                                            <input type="date" className="form-control" id="gdate" name="gdate" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="rdate">Dönüş Tarihi
                                                <div className="form-check form-check-inline pl-1 minibox">
                                                    <input className="form-check-input " type="checkbox" id="inlineCheckbox1"
                                                        value="option1" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Tek Yön</label>
                                                </div>
                                            </label>
                                            <input type="date" className="form-control" id="rdate" name="rdate" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-sm-6">
                                            {/* <div className="form-check form-check-inline">
                                                <label className="form-check-label" htmlFor="inlineCheckbox2">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                        value="option1" />
                                                    Aktarmasız</label>
                                            </div> */}
                                            <label htmlFor="fname"></label>
                                            <input type="text" className="form-control" id="fname" name="fname"
                                                placeholder="1 Yolcu/Ekonomi" />
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button" className="btn btn-success my-4 col-sm-12">Uçak Bileti Bul
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
                                    <p className="card-text">Tumbilet sayesinde tüm biletler içerisinden size uygun uçak biletini birkaç tıkla hızlıca ve kolaylıkla satın alın.</p>
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


