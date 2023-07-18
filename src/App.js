import React, { useState } from "react";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import Card from "./components/Card/Card";
import CardGroup from "./components/Card/CardGroup";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return (
      <div className="App">
        <Button size="small" state="pressed" variant="submit">
          Submit
        </Button>
        <br/>
        <br/>
        <Button size="small" state="regular" variant="vote">
          Vote to see result
        </Button>
        <br/>
        <br/>
        <Button size="large" state="hover">
          More
        </Button>
        <br/>
        <br/>
        <Button size="long" state="disabled">
          Apply
        </Button>
        <br/>
        <br/>
        <TextInput
          state="active"
          value={email}
          onChange={handleEmailChange}
        />
        <br/>
        <TextInput
          state="success"
          value={email}
          onChange={handleEmailChange}
        />
        <br/>
        <TextInput
          state="error"
          value={email}
          onChange={handleEmailChange}
        />
        <br/>
        <Card 
          size="medium"
          image={img1}
          title="Medium Card Title"
          description="Medium Card Description"
          />
          <br/>
        <Card 
          size="large"
          image={img2}
          title="Large Card Title"
          description="Large Card Description"/>
          <br/>
        <CardGroup
        cards={[
          {
            size: "small",
            image: img1,
            title: "Small Card Title",
            description: "Small Card Description",
          },
          {
            size: "small",
            image: img2,
            title: "Small Card Title",
            description: "Small Card Description",
          },
          {
            size: "small",
            image: img3,
            title: "Small Card Title",
            description: "Small Card Description",
          },
        ]}
      />
      </div>

    
  );
}

export default App;
