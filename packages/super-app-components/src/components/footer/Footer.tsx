import Socials from '@/components/footer/Socials'

import { cn } from '@/utils'

import { Brand } from '@/assets/icons'

function Footer() {
  return (
    <div className={cn(
      'flex mobile:flex-col justify-between mobile:justify-normal gap-0 mobile:gap-6',
      'p-10 mobile:px-4 mobile:py-6 border-t border-white/[0.08]',
    )}>
      <div className="flex flex-col gap-10 mobile:!gap-5">
        <div className='flex flex-col gap-5'>
          <a href="/">
            <Brand />
          </a>
          <p className="text-base text-[#e1e2e5]">
            On The Edge Of Gaming
          </p>
        </div>

        <Socials />
        <p className="text-[15px] text-white/50 leading-none">
          © {new Date().getFullYear()} Ancient8. All rights reserved.
        </p>
      </div>

      <div className="flex mobile:flex-col gap-0 mobile:gap-6">
        <div className="flex mobile:justify-between">
          <div className='flex flex-col gap-5 w-[175px] mobile:w-fit'>
            <p className="text-[15px] text-[#f5f6f7] leading-5">
              Application
            </p>
            
            <a
              href="/nftmarketplace"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              NFT Marketplace
            </a>

            {/* TODO: Temporarily hidden due to no page */}
            {/* <a
              href="/gamesandprotocols"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              Games/Protocols
            </a> */}
            <a
              href="/swap"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              Swap
            </a>
            <a
              href="/bridge"
              target="_blank" 
              className="text-sm/5 text-white/60 hover:text-primary">
              Bridge
            </a>
            <a
              href="/staking"
              target="_blank" 
              className="text-sm/5 text-white/60 hover:text-primary">
              Stake
            </a>
          </div>

          <div className='flex flex-col gap-5 w-[175px] mobile:w-fit'>
            <p className="text-[15px] text-[#f5f6f7] leading-5">
              Resources
            </p>
            <a
              href="https://blog.ancient8.gg/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              Newsletters
            </a>
            <a
              href="https://docs.ancient8.gg/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              Documentation
            </a>

            <a
              href="https://scan.ancient8.gg/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              A8 Scan
            </a>

            <a
              href="https://drive.google.com/file/d/1OtQB9cs-OTW32q1ywsDrrcmUcANUHji6"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm/5 text-white/60 hover:text-primary">
              Brand Assets
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-5 w-[175px] mobile:w-fit'>
          <p className="text-[15px] text-[#f5f6f7] leading-5">
            Company
          </p>

          <a 
            href="https://ancient8.gg/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm/5 text-white/60 hover:text-primary">
            About Ancient8
          </a>

          <a 
            href="https://ancient8.gg/careers"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm/5 text-white/60 hover:text-primary">
            Careers
          </a>
          <a 
            href="https://ancient8.gg/ecosystem" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm/5 text-white/60 hover:text-primary">
            Ecosystem
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
