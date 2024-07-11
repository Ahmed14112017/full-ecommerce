import { payment } from "../assets";
import Container from "./Container";
import Footertop from "./Footertop";

export default function Footer() {
  return (
    <div className="mt-10">
      <Footertop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@2024 E-commerce soluations.All right reserved.</p>
        <img src={payment} alt="payment-img" className="object-cover"/>
      </Container>
    </div>
  )
}
