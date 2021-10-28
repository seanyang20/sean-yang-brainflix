import React, { Component } from "react";
import "./CommentSection.scss";
import Comment from '../Comment/Comment';


export default class CommentSection extends Component {

    state = {
        comments: [
            {
                id: 0,
                name: "Micheal Lyons",
                date: "08/09/2021",
                comment:
                "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
            },
            {
                id: 1,
                name: "Gary Wong",
                date: "07/15/2021",
                comment:
                "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
            },
            {
                id: 2,
                name: "Theodore Duncan",
                date: "07/11/2021",
                comment:
                "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
            }
        ]
    }
    
    render () {return (
        <section className="commentsection">
            {this.state.comments.map((comment) => (
            <Comment
                key={comment.id}
                name={comment.name}
                date={comment.date}
                comment={comment.comment}
            />
            ))}
        </section>
        );
    }    
}
