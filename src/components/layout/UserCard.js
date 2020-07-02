import React from 'react';
import { Col, Row, CardDeck, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import JimScottProfile from "../../images/profilepics/jim_scott_profile_pic.jpg"
import KristineSappProfile from "../../images/profilepics/kristine_sapp_profile_pic.jpeg"

function UserCard() {
    // var [card, setCard] = useState([]);

    // var team = [{
    //     id: 1,
    //     name: "Jim Scott",
    //     position: "CEO",
    //     backgroundInfo: ["Jim began his entrepreneurial career in 1982 with $300 in saving and I have applied financial ",
    //                     "leverage in business owned throughout my career to maintain my private company status. He's proud ",
    //                     "of the fact that I've never had outside equity in any of them. I began my career by starting two ",
    //                     "companies, Alpha Products (plastic consumer products manufacturer) and Bulldog Movers was sold to ",
    //                     "a management buyout in 1989 and Alpha Products was sold to Aladdin Industries in 1994. After the sale ",
    //                     "of Alpha Products, I spent the next 3 years with my family enjoying life and began dreaming up my next ",
    //                     "business venture and from that Inzone Inc. was born. Over a twenty year run, the company has built from ",
    //                     "the ground up: Bubba Brands (sold to Newell Rubbermaid in 2014), and good2grow (sold to Kainos in 2018)."],

    //     imageURL: JimScottProfile,
    // },
    // {
    //     id: 2,
    //     name: "Kristine Sapp",
    //     position: "Controller",
    //     backgroundInfo: ["Kristine Sapp joined the In Zone team in 1997 as a Staff Accountant.  Over the years, her positions included ",
    //     "Treasury, Finance Manager, and eventually working her way up to Controller.  Kristine has experience in a wide range of accounting ",
    //     "functions including financial reporting, external auditing, M&A transactions as well as supporting C-Level executives.  Kristine ",
    //     "received her BBA in Accounting from Coles College of Business at Kennesaw State University in 2013."],
    //     imageURL: KristineSappProfile,
    // }];

    // useState = () => {
    //     team([
    //       ...setCard(card),
    //       {
    //         id: card.length,
    //       }
    //     ]);
    //   };


    return (
            <Row>
            {/* <CardDeck> */}
            <Col sm="6">
                <Card>
                    <CardImg top width="100%" src={JimScottProfile} alt="Card image cap" className="ProfilePicture" />
                    <CardBody>
                        <CardTitle><h2>Jim Scott</h2></CardTitle>
                        <CardSubtitle><h3>CEO</h3></CardSubtitle>
                        <CardText>
                        <p>Jim began his entrepreneurial career in 1982 with $300 in savings and has applied financial
                        leverage in business owned throughout my career to maintain my private company status. He's proud
                        of the fact that he's never had outside equity in any of them. He began my career by starting two
                        companies, Alpha Products (plastic consumer products manufacturer) and Bulldog Movers was sold to
                        a management buyout in 1989 and Alpha Products was sold to Aladdin Industries in 1994. After the sale
                        of Alpha Products, he spent the next 3 years with my family enjoying life and began dreaming up my next
                        business venture and from that Inzone Inc. was born. Over a twenty year run, the company has built from
                        the ground up: Bubba Brands (sold to Newell Rubbermaid in 2014), and good2grow (sold to Kainos in 2018).
                        </p>
                        </CardText>
                    </CardBody>
                </Card>
                </Col>
                <Col sm="6">
                <Card>
                <CardImg top width="100%" src={KristineSappProfile} alt="Card image cap" className="ProfilePicture"/>
                <CardBody>
                    <CardTitle><h2>Kristine Sapp</h2></CardTitle>
                    <CardSubtitle><h3>Administrative Director</h3></CardSubtitle>
                    <CardText>
                        <p>
                        Kristine Sapp joined the In Zone team in 1997 as a Staff Accountant.  Over the years, her positions included
                        Treasury, Finance Manager, and eventually working her way up to Controller.  Kristine has experience in a wide range of accounting
                        functions including financial reporting, external auditing, M&A transactions as well as supporting C-Level executives.  Kristine
                        received her BBA in Accounting from Coles College of Business at Kennesaw State University in 2013.
                        </p>
                    </CardText>
                </CardBody>
            </Card>
            </Col>
            </Row>
    )
}
export default UserCard;