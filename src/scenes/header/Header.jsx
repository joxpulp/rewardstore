import React from "react";
import { HeaderStyles, Nav } from "./headerstyles";
import { Button } from "../../components/buttons";
import { Image } from "../../components/image";
import { Wrapper } from "../../components/wrapper";
import { colors } from "../../globalstyles/colors";
import aerolablogo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import banner from "../../assets/header-x1.png";

function Header() {
	return (
		<HeaderStyles>
			<Nav>
				<Image src={aerolablogo} alt="aerolablogo" />
				<Wrapper height="48px" alignY="center" color="#616161">
					<Button
						bgColor="transparent"
						focusColor={colors.whiteColor}
						color="#616161"
                        focusScale
					>
						Julia Col
					</Button>
					<Button
						width="103px"
						height="48px"
						borderRadius="20.5px"
						mgL="27px"
						color="#616161"
						focusColor={colors.backgroundSecunday}
					>
						6000
						<Image mgL="6px" src={coin} alt="coin" />
					</Button>
				</Wrapper>
			</Nav>
			<Image width="100%" src={banner} alt="banner" />
		</HeaderStyles>
	);
}

export default Header;
