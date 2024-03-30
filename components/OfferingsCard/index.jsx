import SVGImages from "assets/images/index";
import Image from "node_modules/next/image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function OfferingsCard() {
  return (
    <Card style={{ width: "18rem", overflow: "hidden", width: "356px" }}>
      <Image variant="top" src={SVGImages.image} />
      <Card.Body className="">
        <Card.Title>Customized Embedded Hardware</Card.Title>
        <ul>
          <li>Hardware Architecture</li>
          <li>Schematics</li>
          <li>Circuit simulation</li>
          <li>PCB Design</li>
          <li>Prototyping</li>
          <li>BOM Management</li>
          <li>Validation Testing</li>
          <li>Reliability</li>
          <li>DFM, DFA</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default OfferingsCard;
