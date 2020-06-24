import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import JimScottProfile from "../../images/profilepics/jim_scott_profile.jpg"
import KristineSappProfile from "../../images/profilepics/kristine_sapp_profile.jpg"

function UserCard() {
    var [card, addCard] = useState([]);

    var team = [{
        id: 1,
        name: "Jim Scott",
        position: "CEO",
        backgroundInfo: "Jim was born 4/27/1961 in Atlanta, Georgia. His father was an entrepreneur and worked int he pre-castconcrete business.",
        imageURL: JimScottProfile,
    },
    {
        id: 2,
        name: "Kristine Sapp",
        position: "Controller",
        backgroundInfo: "Kristine is awesome!!",
        imageURL: KristineSappProfile,
    }];

    addCard = () => {
        team([
          ...card,
          {
            id: card.length,
          }
        ]);
      };

    return (
        <div>
            {this.state.card.map(person => (
                <Card>
                    <CardImg top width="100%" src={person.imageURL} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{person.name}</CardTitle>
                        <CardSubtitle>{person.position}</CardSubtitle>
                        <CardText>{person.backgroundInfo}</CardText>
                        <Button>More</Button>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}
export default UserCard;