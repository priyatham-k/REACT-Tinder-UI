import React from 'react'
import './Footer.css';
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";
function Footer() {
	return (
		<div className="swipeButtons">
			<IconButton>
				<ReplyIcon fontSize="large" className="reply-icon" />
			</IconButton>
			<IconButton>
				<CloseIcon fontSize="large" className="close-icon" />
			</IconButton>
			<IconButton>
				<StarRateIcon fontSize="large" className="star-icon" />
			</IconButton>
			<IconButton>
				<FavoriteIcon fontSize="large" className="fav-icon" />
			</IconButton>
			<IconButton>
				<FlashOnIcon fontSize="large" className="flash-icon" />
			</IconButton>
		</div>
	)
}

export default Footer