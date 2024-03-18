import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> Check out these EPIC Destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/ucak2.webp" text="Tumbilet sayesinde tüm biletler içerisinden size uygun uçak biletini birkaç tıkla hızlıca ve kolaylıkla satın alın." label='Uçak'
                            path='/ucak'
                        />
                        <CardItem
                            src="images/otobus2.webp" text="Şehirler arası yolculuklarınızı keyifli ve konforlu hale getirin! Tumbilet ile otobüs bileti satın alarak hedefinize rahatlıkla ulaşın." label='Otobüs'
                            path='/otobus'
                        />
                        <CardItem
                            src="images/sinema.jpg" text="En yeni filmleri kaçırmayın! Tumbilet ile sinema bileti alın ve büyülü sinema dünyasında unutulmaz bir deneyim yaşayın." label='Sinema'
                            path='/sinema'
                        />
                        <CardItem
                            src="images/tiyatro.jpg" text="Sanat dolu bir gece için hazır mısınız? Tumbilet ile tiyatro bileti alın ve sahnede büyülü anların keyfini çıkarın." label='Tiyatro'
                            path='/tiyatro'
                        />
                        <CardItem
                            src="images/konser2.png" text="Müzik dolu bir geceye hazır olun! Tumbilet ile konser bileti satın alarak favori sanatçılarınızın muhteşem performansını kaçırmayın." label='Konser'
                            path='/konser'
                        />


                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards