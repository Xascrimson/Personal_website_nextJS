import { Drafts, Home, Phone } from "@mui/icons-material";
import { Dialog, DialogTitle, List, ListItem } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import React, { useState } from "react";

export function ContactInfo({ open, onClose }) {
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>Contact Details</DialogTitle>
			<List>
				<ListItem>
					<ListItem  >
						<ListItemIcon>
							<Home />
						</ListItemIcon>

						Southbank, Melbourne, VIC, 3006, Australia
					</ListItem>
				</ListItem>
				<ListItem>
					<ListItemButton
						component="a"
						href="mailto:dannyhuang1234@gmail.com"
					>
						<ListItemIcon>
							<Drafts />
						</ListItemIcon>
						dannyhuang1234@gmail.com

					</ListItemButton>
				</ListItem>
				<ListItem>
				<ListItemButton
						component="a"
						href="tel:+61452504531"

				>
						<ListItemIcon>
							<Phone />
						</ListItemIcon>
						+61 452504531
</ListItemButton>
				</ListItem>
			</List>
		</Dialog>
	);
}

export default function ContactMe(Props) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(!open);
	};

	return (
		<>
			<a
				href="#!"
				onClick={handleClickOpen}
			>
				Contact Me
			</a>
	
			<ContactInfo open={open} onClose={handleClose} />
		</>
	);
}
