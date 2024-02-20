import React from "react";
import * as Styled from "./styled.js";

export const ProfileNavigationPage = (props) => {
    return (
        <Styled.ProfileNavigationContainer>
      <Styled.Options>
        <Styled.OptionLink
          end
          to={""}
          type="personal"
          className={props.active === "personal" ? "active" : ""}
        >
          Personal
        </Styled.OptionLink>
        <Styled.OptionLink
          to={"change-password"}
          type="change-password"
          className={props.active === "change-password" ? "active" : ""}
        >
          Change password
        </Styled.OptionLink>
        <Styled.OptionLink
          to={"surveys"}
          type="surveys"
          className={props.active === "surveys" ? "active" : ""}
        >
          My surveys
        </Styled.OptionLink>
        <Styled.OptionLink
          to={"team-hub"}
          type="team-hub"
          className={props.active === "team-hub" ? "active" : ""}
        >
          Team hub
        </Styled.OptionLink>
      </Styled.Options>
    </Styled.ProfileNavigationContainer>
      );
}
    