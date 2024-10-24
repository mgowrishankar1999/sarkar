import map from '../assets/contactus/MapPin.svg'
import phone from '../assets/contactus/PhoneCall.svg'
import Email from "../assets/contactus/Email.svg"

const ContactData = [
    {
      type: 'address',
      address:{
        primary:'2715 Ash Dr. San Jose,',
        secondary:' South Dakota 83475'
      },
      img: map // assuming 'map' is your image source
    },
    {
      type: 'email',
      email: {
        primary: 'example@example.com',
        secondary: 'second@example.com'
      },
      img:Email
    },
    {
      type: 'phone',
      phone: {
        primary: '+1234567890',
        secondary: '+9876543210'
      },
      img:phone
    }
  ];
  

 export default  ContactData 