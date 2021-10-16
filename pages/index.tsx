import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../public/logo.png';
import { indexStyles } from '../utils/styles';

const imageAnimationStyles = (
  width: number,
  marginLeft: number,
  marginBottom: number,
) => css`
  width: ${width + 'px'};
  transition: all 2s ease-out;
  overflow: hidden;
  margin-left: ${marginLeft + 'px'};
  margin-bottom: ${marginBottom + 'px'};
`;

export default function Home() {
  const [width, setWidth] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          setShowText(true);
        }, 2500);
        setMarginLeft(-300);
        setWidth(300);
        setMarginBottom(75); // 75% of the shrinking of the picture width (= picture height)
      }, 4500);
      setWidth(400);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Sprouts Farmer's Market - Homepage</title>
      </Head>
      <main>
        <div
          css={indexStyles}
          className="flex-container-center-content background-image-cover"
        >
          <div className="hero flex-container-center-content">
            <h1>Welcome to Sprouts!</h1>
            <div className="hero-image-link-text-container">
              <div css={imageAnimationStyles(width, marginLeft, marginBottom)}>
                <Image src={logo} width="400px" height="300px" />
              </div>
              <Link href="/products">
                <a>
                  <button
                    style={{ display: showText ? 'block' : 'none' }}
                    data-cy="homepage-link-to-products"
                  >
                    Enter Shop
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
