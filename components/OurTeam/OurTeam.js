import React, {Component} from 'react';
import TeamMember from "./components/TeamMember";

const teamMembers = [
    {
        name: "Md. Meraz Hossain",
        designation: "Software Engineer",
        image: "images/img-1.jpg",
        about: "Wow! He is very good person"
    },
    {
        name: "S Ahmed Naim",
        designation: "Software Engineer",
        image: "images/img-3.jpg",
        about: "He always pass busy day"
    }
];

class OurTeam extends Component {
    render() {
        return (
            <div className="row my-4">
                <div className="col-12">
                    <h2 className="noo-sh-title">Meet Our Team</h2>
                </div>
                {teamMembers.map((memberDetails)=> (
                    <div className="col-sm-6 col-lg-3">
                        <TeamMember {...memberDetails} />
                    </div>
                ))}
            </div>
        );
    }
}

export default OurTeam;
