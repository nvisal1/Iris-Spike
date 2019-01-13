import React from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import './images.css';

class ImageComponent extends React.Component {

    render() {
        const override = css`
            display: block;
            margin: 0 auto;
            border-color: red;
        `;

        if (this.props.images.length > 0) {
            const images = this.props.images.map((image) => {
                return (
                    <div key={image.id} >
                        <img alt='' src={image.thumbnails[0].uri} onClick={() => window.open(image.gameClipUris[0].uri)}></img>
                        <p>{image.titleName}</p>
                    </div>
                )
            })
            return <div className="image-list">{images}</div>
        }
        else if (this.props.loading) {
           return (
                <div className='sweet-loading spinner'>
                    <ClipLoader
                        css={override}
                        size={300}
                        margin={2}
                        color={'#123abc'}
                        loading={this.props.loading}
                    />
                </div> 
            )
        } else {
            return (
                <div className="text">
                    Iris Spike is a proof of concept for a personal project. The purpose of this app is to allow users to easily find and share xbox game clips.
                </div>
            )
        }
    }
}

export default ImageComponent;