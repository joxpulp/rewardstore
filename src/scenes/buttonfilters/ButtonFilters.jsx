import React from 'react'
import { Box } from '../../components/box';
import { ButtonGP, ButtonGroup } from '../../components/ButtonGroup';


function ButtonFilters({sortElements}) {
    return (
			<Box my='10px' flex={1}>
				<ButtonGroup activeColor='#ffffff' activebg='#0AD4FA' hoverGroup focus>
					<ButtonGP
						onClick={() => sortElements('default')}
						fontSize={['15px', '20px']}
						width={['100%', '172px']}
						mx={['6px', '6px', '24px']}
						my={['5px', '5px', 0]}
						defaultActive
					>
						Most Recent
					</ButtonGP>
					<ButtonGP
						onClick={() => sortElements('ascending')}
						fontSize={['15px', '20px']}
						width={['100%', '172px']}
						mx={['6px', '6px', '24px']}
						my={['5px', '5px', 0]}
					>
						Lowest Price
					</ButtonGP>
					<ButtonGP
						onClick={() => sortElements('descending')}
						fontSize={['15px', '20px']}
						width={['100%', '172px']}
						mx={['6px', '6px', '24px']}
						my={['5px', '5px', 0]}
					>
						Highest Price
					</ButtonGP>
				</ButtonGroup>
			</Box>
		);
}

export default ButtonFilters
