import {
  Button,
  Dropdown,
  Link as UILink,
  Navbar as Nav
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import paytriotLogoDark from 'public/images/img-logo-dark.svg';
import paytriotLogo from 'public/images/img-logo.svg';
import DarkModeSwitcher from './DarkModeSwitcher';
import { icons } from './Icons';

interface MenuItem {
  label: string;
  href: string;
  css?: any;
  dropdownItems?: any[];
}

const navigationItems: MenuItem[] = [
  // {
  //   label: 'Features',
  //   dropdownItems: [
  //     {
  //       key: 'wallet',
  //       label: 'Wallet',
  //       description:
  //         'Wallet scales apps to meet user demand, automagically, based on load.',
  //       icon: icons.scale,
  //       href: 'wallet'
  //     },
  //     {
  //       key: 'bank-account',
  //       label: 'Bank Account',
  //       description:
  //         'Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.',
  //       icon: icons.activity,
  //       href: 'bank-account'
  //     },
  //     {
  //       key: 'partners',
  //       label: 'Partners',
  //       description:
  //         'ACME runs on ACME, join us and others serving requests at web scale.',
  //       icon: icons.flash,
  //       href: 'partners'
  //     },
  //     {
  //       key: 'services',
  //       label: 'Services',
  //       description:
  //         'Applications stay on the grid with high availability and high uptime guarantees.',
  //       icon: icons.server,
  //       href: 'services'
  //     }
  //     // {
  //     //   key: 'supreme_support',
  //     //   label: '+Supreme Support',
  //     //   description:
  //     //     'Overcome any challenge with a supporting team ready to respond.',
  //     //   icon: icons.user,
  //     //   href: 'wallet'
  //     // }
  //   ]
  // },
  { label: 'Home', href: '/' },
  { label: 'Company', href: 'wallet', dropdownItems: [
         {
           key: 'About Us',
           label: 'About Us',
           description:
             'Wallet scales apps to meet user demand, automagically, based on load.',
          href: 'about-us'
        },
        {
          key: 'Service',
          label: 'Service',
          description:
            'Wallet scales apps to meet user demand, automagically, based on load.',
         href: 'services'
       },
       {
        key: 'Partners',
        label: 'Partners',
        description:
          'Wallet scales apps to meet user demand, automagically, based on load.',
        href: 'partners'
      },
      {
        key: 'Blog',
        label: 'Blog',
        description:
          'Wallet scales apps to meet user demand, automagically, based on load.',
        href: 'blog'
      }
  ]},
  { label: 'Products', href: 'wallet', dropdownItems: [
      {
        key: 'Bank Account',
        label: 'Bank Account',
        description:
          'Wallet scales apps to meet user demand, automagically, based on load.',
        href: 'bank-account'
    },
    {
      key: 'Wallet',
      label: 'Wallet',
      description:
        'Wallet scales apps to meet user demand, automagically, based on load.',
      href: 'wallet'
    },
    {
      key: 'Merchant Services',
      label: 'Merchant Services',
      description:
        'Wallet scales apps to meet user demand, automagically, based on load.',
      href: 'services'
    }
  ]},  
  { label: 'Pricing', href: 'pricing' }
  // { label: 'Contact Us', href: 'contact-us', isActive: true }
];

const collapseItems: MenuItem[] = [
  { label: 'Wallet', href: 'wallet' },
  { label: 'Bank Account', href: 'bank-account' },
  { label: 'Partners', href: 'partners' },
  { label: 'Services', href: 'services' },
  { label: 'About Us', href: 'about-us' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Contact Us', href: 'contact-us', css: { color: '$warning' } }
];
export default function NavigationMenu() {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <>
      <Nav
        variant="static"
        css={{
          $$navbarListBlurBackgroundColor: 'red'
        }}
      >
        <Nav.Brand>
          <UILink href="/">
            <Image
              src={!isDark ? paytriotLogo : paytriotLogoDark}
              alt="Paytriot Logo"
            />
          </UILink>
        </Nav.Brand>
        <Nav.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
        >
          {navigationItems.map(item => {
            if (item?.dropdownItems) {
              return (
                <Dropdown isBordered key={item.label}>
                  <Nav.Item>
                    <Dropdown.Button
                      auto
                      light
                      css={{
                        px: 0,
                        dflex: 'center',
                        svg: { pe: 'none' }
                      }}
                      iconRight={icons.chevron}
                      ripple={false}
                    >
                      {item.label}
                    </Dropdown.Button>
                  </Nav.Item>
                  <Dropdown.Menu
                    aria-label={`${item.label} features`}
                    css={{
                      $$dropdownMenuWidth: '340px',
                      $$dropdownItemHeight: '70px',
                      '& .nextui-dropdown-item': {
                        py: '$4',
                        // dropdown item left icon
                        svg: {
                          color: '$secondary',
                          mr: '$4'
                        },
                        // dropdown item title
                        '& .nextui-dropdown-item-content': {
                          w: '100%',
                          fontWeight: '$semibold'
                        }
                      }
                    }}
                  >
                    {item?.dropdownItems?.map(subItem => (
                      <Dropdown.Item
                        key={subItem?.key}
                        showFullDescription
                        description={subItem?.description}
                        icon={subItem?.icon}
                      >
                        <Link
                          style={{ textDecoration: 'none' }}
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              );
            } else {
              return (
                <Nav.Link
                  key={item.label}
                  isActive={router.pathname === `/${item.href}`}
                  href={item.href}
                >
                  {item.label}
                </Nav.Link>
              );
            }
          })}
        </Nav.Content>
        <Nav.Content>
          <Nav.Item>
            <Button
              style={{ textDecoration: 'none' }}
              auto
              rounded
              color="warning"
              // as={Link}
              onClick={() => router.push('/contact-us')}
              // href="/contact-us"
            >
              Contact Us
            </Button>
          </Nav.Item>
          <DarkModeSwitcher />
        </Nav.Content>
        <Nav.Toggle showIn="xs" />
        <Nav.Collapse>
          {collapseItems.map((item, index) => (
            <Nav.CollapseItem
              key={item.label}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? '$error' : ''
              }}
              isActive={router.pathname === `/${item.href}`}
            >
              <UILink
                color="inherit"
                css={{
                  minWidth: '100%'
                }}
                href={item.href}
              >
                {item.label}
              </UILink>
            </Nav.CollapseItem>
          ))}
        </Nav.Collapse>
      </Nav>
    </>
  );
}
