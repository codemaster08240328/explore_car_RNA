import img1 from '../asset/image/car.png'
import img2 from '../asset/image/car2.gif'
import img3 from '../asset/image/car3.gif'
import img4 from '../asset/image/car4.gif'
import img5 from '../asset/image/car5.gif'



const dummyData = [
    {
        name:'Mercedes Benz C 250',
        year:'2014',
        mileage:7140,
        price:70670,
        mobileType:'minivan',
        brand:'toyota',
        img:img1

    },
    {
        name:'Nissan Patrol Platinum',
        year:'2015',
        mileage:7486,
        price:67895,
        mobileType:'cabriolet',
        brand:'mazda',
        img:img2

    },
    {
        name:'Lexus LX 450',
        year:'2012',
        mileage:5890,
        price:45895,
        mobileType:'coupe',
        brand:'nissan',
        img:img3

    },
    {
        name:'Mercedes Benz C 250',
        year:'2014',
        mileage:6589,
        price:49865,
        mobileType:'pickup',
        brand:'honda',
        img:img4

    },
    {
        name:'Toyota Corolla 1.81',
        year:'2014',
        mileage:4869,
        price:86542,
        mobileType:'sport car',
        brand:'honda',
        img:img1

    },
    {
        name:'Kia Rio',
        year:'2013',
        mileage:3140,
        price:74938,
        mobileType:'hatchback',
        brand:'toyota',
        img:img5

    },
    {
        name:'Mercedes Benz C 250',
        year:'2014',
        mileage:7140,
        price:70670,
        mobileType:'sedan',
        brand:'mazda',
        img:img3

    },
    {
        name:'Toyota Hilux GLX.S',
        year:'2016',
        mileage:5130,
        price:50470,
        mobileType:'roadster',
        brand:'nissan',
        img:img2

    }
]
// 'sedan, roadster, hatchback, sport car, coupe, pickup, cabriolet, minivan'
// 'nissan, mazda, toyoda, honda'
export default getDummydata = ()=>{
    return dummyData;
}