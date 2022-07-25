import { useEffect, useRef, useCallback, useState } from 'react';
import {
  IconBar,
  ToggleBtn,
  Links,
  LinkContainer,
  MenuSection,
  MenuWrapper,
  MenuContainer,
  LinkWrap,
} from './styles';
import { gsap } from 'gsap';
import useArrayRef from '../../hooks/useArrayRef';
import { navItems } from '../../shared/navItems';
import { Typography } from '@mui/material';

export default function MobileMenu() {
  const tl = useRef();
  const menu = useRef();
  const [links, setLinks] = useArrayRef();
  const [bars, setBars] = useArrayRef();
  const token = false;
  const [openMenu, setOpenMenu] = useState(false);

  const openShopMenu = useCallback(
    () => setOpenMenu(openMenu => !openMenu),

    [setOpenMenu]
  );

  useEffect(() => {
    gsap.set(links.current, { autoAlpha: 0, yPercent: 150 });
    gsap.set(menu.current, {});
    tl.current = gsap.timeline({ pause: true });

    tl.current
      .to(
        bars.current[0],
        {
          transform: 'rotate(45deg) translate(10px, 7.5px)',
        },
        0
      )
      .to(
        bars.current[1],
        {
          opacity: 0,
        },
        0
      )
      .to(
        bars.current[2],
        {
          transform: 'rotate(-45deg) translate(7px, -6px)',
        },
        0
      )
      .to(menu.current, 1.5, {
        opacity: 1,
        display: 'block',
        ease: 'Power2.out',
      })
      .to(links.current, {
        autoAlpha: 1,
        duration: 2,
        ease: 'power3',
        yPercent: 0,
        stagger: 0.1,
      });
  }, []);

  useEffect(() => {
    openMenu ? tl.current.play() : tl.current.reverse();
    if (openMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [tl, openMenu]);

  return (
    <>
      <ToggleBtn onClick={openShopMenu}>
        <IconBar ref={setBars} />
        <IconBar ref={setBars} />
        <IconBar ref={setBars} />
      </ToggleBtn>
      <MenuSection ref={menu}>
        <MenuContainer id='menu-container'>
          <MenuWrapper>
            <LinkContainer>
              {navItems.map(items => {
                const { id, label, link } = items;

                return (
                  <LinkWrap key={id}>
                    <Links onClick={openShopMenu} to={link} ref={setLinks}>
                      {label}
                    </Links>
                  </LinkWrap>
                );
              })}
              <LinkWrap>
                <Links
                  ref={setLinks}
                  onClick={openShopMenu}
                  to={token ? 'account' : 'signin'}
                  $dn={'none'}>
                  Account
                </Links>
              </LinkWrap>
            </LinkContainer>
          </MenuWrapper>
        </MenuContainer>
      </MenuSection>
    </>
  );
}
