import React from "react";

import { layoutGenerator } from "react-break";

import {
  HeaderContainer,
  TitleContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";

const layout = layoutGenerator({
  mobileStart: 0,
  mobileEnd: 415,
  mobletStart: 416,
  tabletStart: 600,
  tabletEnd: 991,
  desktopStart: 992,
});

const OnAtMostMobile = layout.isAtMost("mobileEnd");
const OnMoblet = layout.is("mobletStart");
const OnTablet = layout.is("tabletStart");
const OnAtLeastDesktop = layout.isAtLeast("desktopStart");

const Header = () => (
  <HeaderContainer>
    <OnAtMostMobile>EFT</OnAtMostMobile>
    <OnMoblet>Escape From Tarkov</OnMoblet>
    <OnTablet>Escape From Tarkov Guide</OnTablet>
    <OnAtLeastDesktop>Escape From Tarkov Players Guide</OnAtLeastDesktop>
    <OptionContainer>
      <OptionLink to="/">Home</OptionLink>
      <OptionLink to="/">Flea Market</OptionLink>
      <OptionLink to="/">Hideout</OptionLink>
      <OptionLink to="/">Quests</OptionLink>
    </OptionContainer>
  </HeaderContainer>
);

export default Header;
