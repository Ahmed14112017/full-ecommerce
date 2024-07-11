import Container from './Container';

export default function Footertop() {
    const incentives = [
        {
          name: "Free shipping",
          imageSrc:
            "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
          description:
            "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
        },
        {
          name: "10-year warranty",
          imageSrc:
            "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
          description:
            "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
        },
        {
          name: "Exchanges",
          imageSrc:
            "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
          description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
        },
      ];
  return (
    
      <Container className='flex flex-col justify-center items-center gap-5 lg:gap-0 bg-[#f6f6f6]'>
        <div className='py-10 font-bold text-3xl'>
            <p>We built our business on customer service</p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-8 md:gap-4 justify-center items-center'>
            {incentives.map((item)=>{
                return(
                    <div className='w-full flex justify-center items-center  '>
                        <div className='w-[80%] flex flex-col items-center gap-4 '>
                        <img src={item.imageSrc} alt='img'className='w-[50px] object-contain'/>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <p className='text-lightText tracking-wide text-sm'>{item.description}</p>
                        </div>

                       
                    </div>
                )
            })}
        </div>
      </Container>
  )
}
