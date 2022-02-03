import { Favorite, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined, ThumbUp, ThumbUpOutlined, ShareRounded } from '@mui/icons-material';
import { Button, IconButton, SvgIcon } from '@mui/material';

import { Box } from '@mui/material';
import React from 'react';

function PostLikeShare() {
    const isLike = true;
    return <Box
        sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            borderRadius: 7,

            position: 'sticky',
            top: 100,
            minWidth: 64,
            width: 'auto',
            height: 170,

            mr: 5,
            mt: 5,

            bgcolor: '#ffffff11',
            boxShadow: 2,

            // TODO
            border: '1px solid grey',
        }}>
        {/* <ThumbUp />
        <ThumbUpOutlined /> */}
        <IconButton aria-label="like" component="span" size="large" sx={{ border: '1px solid grey' }}>
            <SvgIcon color='error' fontSize='medium' viewBox=''>
                {isLike ? <Favorite /> : <FavoriteBorderOutlined />}
            </SvgIcon>
        </IconButton>
        <p>23</p>
        <IconButton color="info" aria-label="sns share" component="span" size="large" sx={{ border: '1px solid grey' }}>
            <SvgIcon fontSize='medium' >
                <ShareRounded />
            </SvgIcon>
        </IconButton>

    </Box>
}

export default PostLikeShare;
