import { useState } from "react";

const Painting = props => {

  const [votes, addVote] = useState(props.painting.votes)

  return (
    <div>
      <img src={props.painting.image} />
      <h4>
        "{props.painting.title}" by {props.painting.artist.name}
      </h4>
      <p>Year: {props.painting.date}</p>
      <p>
        Dimensions: {props.painting.dimensions.width} in. x {props.painting.dimensions.height} in.
      </p>

      <div class="ui labeled button" tabindex="0">
          <div class="ui red button" onClick={() => addVote(votes+1)}>
            <i class="heart icon"></i> Add Vote
          </div>
          <a class="ui basic red left pointing label">
            {votes}
          </a>
      </div>
    </div>
      
  );
};

export default Painting;
