import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import LogoConfetti from './LogoConfetti'

const Header = () => {
  // Solid background (not translucent/blurred) so content scrolling underneath
  // disappears cleanly instead of ghosting through the sticky bar.
  const headerClass =
    'sticky top-0 z-50 flex items-center w-full justify-between py-2 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          <LogoConfetti>
            <div className="nav-logo-glow mr-3">
              {/* Logo remains the same in both modes */}
              <Logo className="h-20 w-20 sm:h-28 sm:w-28" />
            </div>
          </LogoConfetti>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-2xl font-semibold text-gray-900 sm:block dark:text-gray-100">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden items-center gap-x-3 overflow-x-auto sm:flex md:gap-x-4">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
