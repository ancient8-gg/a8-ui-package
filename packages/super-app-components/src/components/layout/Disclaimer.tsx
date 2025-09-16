"use client";

import { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import Button from "../button";
import { cn } from "@/utils";

type ContentProps = {
  className?: string
  children: React.ReactNode
}

type LinkProps = {
  href: string
  children: React.ReactNode
}

const Heading = ({ children }: ContentProps) => {
  return <h2 className="font-bold text-[15px]/[1.4] text-[#F5F6F7] sm:text-[14px]">{children}</h2>
}

const Content = ({ children, className }: ContentProps) => {
  return <div className={cn("font-normal text-[15px]/[1.5] text-[#E1E2E5] flex flex-col sm:text-[14px]", className)}>{children}</div>
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-[15px]/[1.4] text-[#CEFF70] sm:text-[14px]"
    >
      {children}
    </a>
  )
}

const Terms = () => {
  return <div className="flex flex-col gap-y-2 text-left">
    <Content>
      <span>This end-user agreement (the "Agreement") should be read by you (the "User" or "you") in its entirety prior to your use of Ancient8’s service or products. Be aware that this Agreement constitutes a legally binding agreement between you and Ancient8 (referred to herein as "Ancient8", "us" or "we") which owns the website on the Internet at <Link href="https://ancient8.gg/">https://ancient8.gg/</Link> (the “Site” or “Platform”) and operates the Service (the "Service"). By using the Site, its subdomains, and any services available within the site, including sm applications (collectively the "Services"), you agree to be bound by these Terms of Service as well as our Privacy Policy. If you do not agree to the Terms of Service herein, do not use the Site or Services. The Site and Services are provided by Metacyber8 Limited (also referred to as “Company”) a company incorporated in the British Virgin Islands (BVI).</span>
      <br />
      <span>Company reserves the right, at its sole discretion, to amend, change, modify, add or remove portions of these Terms of Service at any time.</span>
      <br />
      <span>We offer a wide range of products and services, and additional terms may apply. When you use Company’s Services, you will also be subject to the guidelines, terms, and agreements applicable to that particular service (the "Service Terms"). If these Terms of Service are inconsistent with the Service Terms, the Service Terms will control.</span>
    </Content>
    <Heading>
      1. General Conditions of Use
    </Heading>
    <Content>
      <span>1.1. By signing up to use an Account through any of the Ancient8 Clients’ social websites made available through the Ancient8 Platform, you agree to comply with and be legally bound by this Agreement. If you do not agree to any of the terms set forth in this Agreement or any subsequent modification to the Agreement, you may not access or use any of the Ancient8 Services and must cancel your Ancient8 Account immediately.</span>
      <br />
      <span>1.2. We may amend or modify this Agreement by posting such amended or modified Agreement (“Revised Agreement”) on the Ancient8 Platform or by notifying you about the changes via email. Your continued use of the Services following the published updates to the terms will mean that you accept and agree to the changes.</span>
      <br />
      <span>1.3. To be eligible to use the Ancient8 Services, you must be at least 18 years old (or the applicable age of majority and contractual capacity in each qualifying jurisdiction). By accessing or using the Ancient8 Services you represent and warrant that you are 18 or older and you have full legal capacity and authority to agree and bind yourself to these Service Terms. If you act as an employee or agent of a legal entity, and enter into these Service Terms on their behalf, you represent and warrant that you have all the necessary rights and authorizations to bind such legal entity.</span>
      <br />
      <span>1.4. Ancient8 disclaims any and all warranties, expressed, implied or statutory, in connection with the service which is provided to you "as is" and we provide you with no warranty or representation whatsoever regarding its quality, fitness for purpose, completeness, or accuracy.</span>
      <br />
      <span>1.5. The term "Ancient8", its domain names and any other trademarks, or service marks used by Ancient8 as part of the Service (the "Trademarks"), are solely owned by Ancient8. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio, and text (the "Site Content") belongs to Ancient8 and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trademarks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trademarks without Ancient8’s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Ancient8.</span>
      <br />
      <span>1.6. The Services, the Site and the Platform are not available to residents of Afghanistan, American Samoa, Angola, Armenia, Azerbaijan, Balkans, Belarus, Bosnia and Herzegovina, Botswana, Burundi, Cambodia, Cameroon, Canada, Central African Republic, Chad, Crimea of Ukraine, Cuba, Democratic People's Republic of Korea, Democratic Republic of the Congo, England and Wales, Eritrea, Ethiopia, Ghana, Guam, Guinea, Guinea-Bissau, Haiti, Iran, Iraq, Japan, Laos, Lebanon, Liberia, Libya, Madagascar, Mali, Mozambique, Myanmar (Burma), Nicaragua, Northern Mariana Islands, Pakistan, People’s Republic of China, Puerto Rico, Republic of the Congo, Russia, Somalia, South Sudan, Sri Lanka, Sudan, Syrian Arab Republic (Syria), Tajikistan, Trinidad and Tobago, Turkmenistan, Uganda, United Kingdom, Uzbekistan, Vanuatu, Venezuela, Vietnam, Virgin Islands (U.S.), Yemen, and Zimbabwe and any other jurisdiction in which accessing or using our protocol is prohibited (each a “Restricted Country”). We reserve the right to choose markets and jurisdictions to conduct business and may restrict or refuse the access of the Site and our Services in other countries or regions in our sole discretion.</span>
      <br />
      <span>1.7. Without limiting the foregoing, you represent, warrant, and covenant that you are not, and for the duration of the time you use the Services, will not be: (a) the subject of economic or trade sanctions administered or enforced by any governmental authority or otherwise designated on any list of prohibited or restricted parties (including but not limited to the United Nations Security Council, the European Union, His Majesty’s Treasury, and U.S. Department of Treasury), or (b) a citizen, resident, or organized in a jurisdiction or territory that is the subject of comprehensive country-wide, territory-wide, or regional economic sanctions by the United Nations, European Union, any EU country, UK Treasury, or the United States. If at any point the above is no longer true, you must immediately cease using the Services.</span>
    </Content>

    <Heading>
      2. Protocol
    </Heading>
    <Content>
      <span>
        The Site is an interface that enables you to interact with Ancient8 Chain,
        which is a layer 2 decentralised autonomous smart contract system deployed
        on Ethereum (the “Protocol”). The Protocol is comprised of smart contracts
        deployed on the blockchain network(s) that operate in a decentralised and
        autonomous manner. These smart contracts can be reviewed, verified, used,
        copied, modified, and distributed by anyone (subject to the terms of the
        applicable license). Accordingly, there might be other interfaces enabling
        interaction with the Protocol that we neither control nor are affiliated
        with. Furthermore, anyone can interact directly with the Protocol bypassing
        us and other interfaces. You should carefully and thoroughly review and
        assess the Protocol and related software before you use them, and any such
        use shall be at your own risk. You should always do your own research.
      </span>
      <br />
      <span>
        You further acknowledge that we do not control the Protocol, its underlying
        blockchain networks, and any software through which such network is formed.
        We only provide the users with the Website being an interface to access the
        Protocol. Accordingly, in no event shall we be responsible for or held
        liable in connection with the Protocol, underlying blockchain networks or
        software, their operation, functioning, implementation, or use, and you
        hereby assume and accept any and all related risks, including the risk of
        possible losses and damages that you may incur in connection with the use
        thereof.
      </span>
    </Content>

    <Heading>
      3. Accessing the Services
    </Heading>
    <Content>
      <span>
        The Company grants you a revocable, non-exclusive, non-transferable, limited license
        to use the Services (information or software) on the Site in accordance with these
        Terms of Service and applicable Service Terms. This is the grant of a license, not a
        transfer of title, and under this license, you may not:
      </span>
      <br />
      <span>
        • modify or copy the materials;
      </span>
      <br />
      <span>
        • attempt to decompile or reverse engineer any software contained on the Site;
      </span>
      <br />
      <span>
        • remove any copyright or other proprietary notations from the materials; or
      </span>
      <br />
      <span>
        • transfer the materials to another person or "mirror" the materials on any other server.
      </span>
      <br />
      <span>
        This license shall automatically terminate if you violate any of these restrictions and may
        be terminated by Company at any time. Upon terminating your viewing of these materials
        or upon the termination of this license, you must destroy any downloaded materials in
        your possession whether in electronic or printed format.
      </span>
      <br />
      <span>
        You must keep secret all credentials associated with the Services. You are solely
        responsible for managing and maintaining the security of any information relating
        to such credentials and agree that Company shall not be held responsible (and you
        shall not hold us responsible) for any unauthorized access to the Services or any
        resulting harm you may suffer.
      </span>
      <br />
      <span>
        You agree to notify us immediately of any unauthorized access to or use of your
        user name or password or any other breach of security. You also agree to ensure
        that you exit from your account at the end of each session. You should use particular
        caution when accessing your account from a public or shared computer so that others
        are not able to view or record your password or other personal information.
      </span>
      <br />
      <span>
        Your access to one or more Services may be contingent upon satisfaction of our
        onboarding processes, which may include verification of your identity and additional
        information we may request from time-to-time. The information we request may include,
        without limitation, personally identifiable information such as network address, name,
        email, address, telephone number, date of birth, taxpayer identification or social
        security number, official government-issued photo identification, and bank account
        information or other information we may reasonably deem helpful in satisfying our risk
        management or legal obligations. In providing this information to us you represent that
        it is accurate and agree to update your information promptly, but in no event later than
        14 days following any change in your information. Failure to provide information or update
        it promptly may result in Services or funds being unavailable to you.
      </span>
      <br />
      <span>
        Any and all communications from the Company may be provided to you via electronic mail
        at the address you provided when accessing the Services. Company shall not be responsible
        for any harm you may suffer as a result of your failure to receive any notice provided
        to you in connection with your use of Services so long as such notice is provided to such
        email address. The Company may also communicate with you through other methods, including
        via telephone call, instant messaging or chat applications either operated by Company or
        a third party.
      </span>
      <br />
      <span>
        We may close, terminate, enable or disable any or all of the Services, or your access to
        the Services at any time and for any reason. When accessing our Site or attempting to use
        our Services, you represent that you have not been previously suspended or removed from
        using our Services.
      </span>
    </Content>

    <Heading>
      4. Disclaimer
    </Heading>
    <Content>
      <span>
        COMPANY DISCLAIMS ANY AND ALL PROMISES, REPRESENTATIONS AND WARRANTIES,
        WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO,
        ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        DATA ACCURACY, SYSTEM INTEGRATION, TITLE, NON-INFRINGEMENT AND/OR
        QUIET ENJOYMENT, AND ANY SERVICES PROVIDED BY COMPANY ARE PROVIDED
        "AS IS" AND "AS AVAILABLE". EXCEPT AS EXPRESSLY PROVIDED HEREIN, YOU
        ACKNOWLEDGE THAT COMPANY MAKES NO WARRANTIES UNDER THIS AGREEMENT
        DIRECTLY FOR THE BENEFIT OF ANY END USER, AND THAT COMPANY’S OBLIGATIONS
        UNDER THIS AGREEMENT ARE FOR THE BENEFIT OF YOU ONLY, AND NOT FOR THE
        BENEFIT OF ANY OTHER PERSON. IN ENTERING INTO THIS AGREEMENT, YOU
        REPRESENT THAT YOU HAVE NOT RELIED UPON ANY REPRESENTATION OR WARRANTY
        OF COMPANY OR ITS AFFILIATES EXCEPT AS EXPRESSLY SET FORTH IN THIS
        AGREEMENT. WE DO NOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT ACCESS
        TO THE SERVICES SHALL BE CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE.
      </span>
      <br />
      <span>
        You understand that we cannot and do not guarantee or warrant that files
        available for downloading from the Site will be free of viruses or other
        destructive code. You are responsible for implementing sufficient procedures
        and checkpoints to satisfy your particular requirements for anti-virus
        protection and accuracy of data input and output, and for maintaining a means
        external to our site for any reconstruction of any lost data.
      </span>
      <br />
      <span>
        Any statements and representations made by us or on our behalf, and any use
        of the tokens issued by us (the “Tokens”) or of any platform, service or
        protocol upon which our Tokens operate (the “Project”), regardless of whether
        such Project is owned, operated, developed or otherwise controlled by us,
        shall be subject to this disclaimer.
      </span>
      <br />
      <span>
        The Project, while not owned, operated, developed or otherwise controlled
        by us, may be provided on an “as is” and “as available” basis, without
        warranty of any kind, either expressed or implied, including, without
        limitation, warranties that the Project is free of defects, vulnerabilities,
        merchantable, fit for a particular purpose or non-infringing. Any use of the
        Project shall be at your own risk. In no event shall we be held liable in
        connection with or for any claims, losses, damages or other liabilities,
        whether in contract, tort or otherwise, arising out of or in connection with
        the Project or its operation or use.
      </span>
    </Content>
    <Heading>
      5. Risk of Digital Assets and Decentralized Networks
    </Heading>
    <Content>
      <span>
        Please note that all transactions involving digital assets or cryptocurrencies
        with a certain value that are based on blockchain or cryptography technologies
        that are issued and managed in a decentralized form involve substantial risks.
        You should therefore carefully consider whether using our Services is suitable
        for you in light of your financial condition. In considering whether to hold
        digital assets, you should be aware that the price or value of digital assets
        can change rapidly, decrease, and potentially even fall to zero. Past performance
        is not an indicator of future performance. You acknowledge that we are not
        responsible for any loss of your digital asset resulting from theft, loss, or
        mishandling of digital asset private keys outside our control.
      </span>
      <br />
      <span>
        We do not warrant or represent that the Tokens, the Project or any such related
        software are secure or safe, or protected from phishing, malware or other
        malicious attacks. Further, the Tokens, the Project and their related software
        may contain weaknesses, bugs, vulnerabilities, viruses or other defects which
        may have a material adverse effect on the operation of the Tokens, the Project
        or any such related software or may lead to losses and damages for you, other
        users of the Tokens, the Project or any such related software or third persons.
      </span>
      <br />
      <span>
        The Tokens, the Project and their related software are or will be deployed on
        the Ethereum blockchain main network, and later may be deployed on other
        blockchains. As a result, any malfunction, breakdown or abandonment of such
        blockchain(s) may have a material adverse effect on the Tokens, the Project or
        such related software. Moreover, advances in cryptography, or technical advances
        such as the development of quantum computing, could present risks to the Tokens,
        the Project or such related software, and related blockchain software by
        rendering ineffective the cryptographic consensus mechanism that underpins the
        blockchain.
      </span>
      <br />
      <span>
        The underlying logic of the Tokens, the Project and their related software may
        be flawed, defective or impaired, which can result in smart-contracts operating
        incorrectly or not as expected, or transactions being executed in violation of
        logic which underpins the smart-contracts, which can lead to partial or complete
        loss of digital assets used in the transaction.
      </span>
      <br />
      <span>
        We are not responsible for any digital asset market and we make no representations
        or warranties concerning the real or perceived value of digital assets as
        denominated in any quoted currency. Although we may provide historical and/or
        real-time data regarding the price of digital assets, we make no representations
        regarding the quality, suitability, truth, usefulness, accuracy, or completeness
        of such data, and you should not rely on such data for any reason whatsoever.
        You understand and agree that the value of digital assets can be volatile, and
        we are not in any way responsible or liable for any losses you may incur by
        using or transferring digital assets in connection with our Services.
      </span>
      <br />
      <span>
        Digital assets, blockchain technology, and any related software and services are
        subject to legal and regulatory uncertainty in the United States and other
        jurisdictions throughout the world. You acknowledge and understand that
        legislative and regulatory changes or actions may adversely affect the usage,
        transferability, transactability and accessibility of the Services, the Site,
        the Platform and/or digital assets in general.
      </span>
      <br />
      <span>
        The information and descriptions contained in the Website are not to be construed
        as an offering memorandum, advertisement or prospectus. Accordingly, this
        information is not intended to be a complete description of all terms, exclusions
        and conditions applicable to the Services described in this Website. This Website
        and any information or materials contained in it do not constitute the
        distribution, an offer or solicitation of any kind to purchase or sell any
        product, security or instrument whatsoever nor should they be construed as
        providing any type of investment or other advice or recommendations by us, any of
        our affiliates or third parties to any person in any jurisdiction where such
        distribution, offer, solicitation, purchase or sale would be unlawful under the
        laws of such jurisdiction. We do not provide investment advice and any content
        contained on the Site should not be considered as a substitute for tailored
        investment advice. The contents of our Site and the Services should not be used
        as a basis for making investment decisions. Before you make any financial, legal,
        or other decisions involving our Services, you should seek independent professional
        advice from an individual who is licensed and qualified in the area for which such
        advice would be appropriate.
      </span>
    </Content>
    <Heading>
      6. Your Representations and Warranties
    </Heading>
    <Content>
      <span>
        Prior to your use of the Service and on an ongoing basis you represent,
        warrant, covenant, and agree that:
      </span>
      <br />
      <span>
        6.1. There is a risk of losing cryptocurrency &amp; other funds of value when
        using the Service and Ancient8 has no responsibility to you for any such
        loss;
      </span>
      <br />
      <span>
        6.2. Your use of the Service is at your sole option, discretion, and risk.
        You hereby accept full responsibility for any consequences that may arise
        from your use of the Services, and expressly agree and acknowledge that
        Ancient8 shall have absolutely no liability in this regard.
      </span>
      <br />
      <span>
        6.3. You are solely responsible for any applicable taxes which may be
        payable on cryptocurrency traded or transacted by you through your using the
        Service;
      </span>
      <br />
      <span>
        6.4. Any cryptographic tokens, blockchain technology, or distributed ledger
        technology-related projects are new and relatively untested, and outside of
        both our and our Clients’ exclusive control. Any adverse changes in market
        forces, technology, and regulatory environment impacting our performance
        under this Agreement shall absolve us from responsibility in this regard,
        including but not limited to hacking attacks, possible theft, unfavorable
        regulatory action, or unclear legal/tax status of cryptographic tokens.
      </span>
      <br />
      <span>
        6.5. (i) You are eighteen years of age or older, (ii) you are of the age of
        majority in your jurisdiction, (iii) you are accessing the Service from a
        jurisdiction in which it is legal to do so, and you are not from any
        Restricted Country, (iv) your use of the Services is not prohibited by
        applicable law, and at all times compliant with applicable law, (v) you are
        aware of the risks associated with transactions of encrypted or digital
        tokens or cryptocurrencies with a certain value that are based on blockchain
        and cryptography technologies and are issued and managed in a decentralized
        form and (v) you are solely responsible and will assume all risks for use of
        the Services and, if applicable, for all activities that occur on or through
        your User Account.
      </span>
      <br />
      <span>
        6.6. You may not use our services (or facilitate others to use our services)
        to:
      </span>
      <br />
      <span>
        – Undertake any illegal or fraudulent activity, including violation of
        intellectual property rights of Ancient8 or any other party;
      </span>
      <br />
      <span>
        – Undertake any activity that is threatening or abusive or be likely to
        harass, upset, embarrass or annoy any other person;
      </span>
      <br />
      <span>
        – Undertake any activity that promotes violence, terrorism, child sexual
        exploitation, abuse or other serious harm;
      </span>
      <br />
      <span>
        – Publishes or seek to disseminate any defamatory, obscene, offensive or
        misleading material, in the reasonable opinion of Ancient8;
      </span>
      <br />
      <span>
        – Avoid or circumvent any applicable sanctions, including those maintained
        by the United Nations Security Council (“UNSC”), the United States
        Department of the Treasury’s Office of Foreign Assets Control (“OFAC”) and
        the Australian Government Department of Foreign Affairs and Trade (“DFAT”)
        or any other applicable regime;
      </span>
      <br />
      <span>
        – Breach any legal duty owed to a third party or promote illegal activity;
      </span>
      <br />
      <span>
        – Generate excessive volume of calls to Ancient8’s systems or APIs, such as
        to attempt to provide an unfair advantage to a specific market making tool
        over other market participants;
      </span>
      <br />
      <span>
        – Solicit Ancient8’s users for commercial purposes or disparage Ancient8 or
        our partners;
      </span>
      <br />
      <span>
        – Seek to pre-fetch, cache, index, copy, re-utilise, extract, incorporate,
        store (including in a database) or otherwise utilise any of Ancient8’s
        products or services in a way which would effectively circumvent the
        Platform or any automated fee calculation or collection;
      </span>
      <br />
      <span>
        – Undertake any activity that would have the effect of reselling the
        services and functions which Ancient8 provides other than as permitted via
        agreement with Ancient8;
      </span>
      <br />
      <span>
        – Attempt to compromise, break or circumvent any technical processes or
        security of our systems or the systems of anyone else, including through
        exposure to any viruses or other harmful program;
      </span>
      <br />
      <span>
        – Generate misleading or fraudulent trading activity, such as initiating
        trades in which the buyer and seller wallet address is controlled by the
        same person(s);
      </span>
      <br />
      <span>
        – Contribute to an effort to build a similar product or a competitive
        product to any Ancient8 product or service;
      </span>
      <br />
      <span>
        – Give the impression that the user’s conduct originates from Ancient8 or is
        approved by Ancient8; or
      </span>
      <br />
      <span>
        – Undertake any action which in Ancient8’s determination, at their sole
        discretion, acting reasonably, is undesirable or not in accordance with the
        service’s permitted purpose(s).
      </span>
    </Content>

    <Heading>
      7. Know your Customer (“KYC”) and Anti-Money Laundering (AML) Policy
    </Heading>

    <Content>
      <span>
        Ancient8 is a permissionless, fully decentralized platform. As a software development company,
        Ancient8 has no role in enforcing KYC by default, however, we do provide such tools for
        fundraising entities using Ancient8 to enforce on their users, if the entities choose to do so.
        The use of KYC/AML tools on Ancient8 by fundraising entities using the Service is completely at
        the discretion of said entities.
      </span>
      <br />
      <br />
      <span>
        Although Ancient8 makes no warranty as to the merit, legality, or juridical nature of any token
        (including whether or not it is considered a security or financial instrument under any
        applicable Securities Laws), token sale or fundraiser on top of Ancient8, we nonetheless
        understand the need of some token projects to require KYC/AML on their token sale participants.
      </span>
      <br />
      <br />
      <span>
        Therefore, and at the sole behest of fundraising entities and/or competent regulatory
        authorities, Ancient8 reserves the right at any time:
      </span>
      <br />
      <br />
      <span>To ask for any KYC documentation it deems necessary to determine the identity and location of a User.</span>
      <br />
      <span>To restrict service and payment until identity is sufficiently determined.</span>
      <br />
      <span>To share submitted KYC information and documentation to 3rd parties to verify the authenticity of submitted information, and the end-user (you) agrees to this by using the Service.</span>
      <br />
      <span>To confiscate any and all funds that are found to be in violation of relevant and applicable anti-money laundering (AML) and countering terrorism financing (CFT) laws and regulations, and to cooperate with the competent authorities when and if necessary.</span>
    </Content>
    <Heading>
      8. User Contributions
    </Heading>

    <Content>
      <span>
        You represent and warrant that you own or control all rights in and to any content including,
        without limitation, all data you input into the Site or Services.
      </span>
      <br />
      <br />
      <span>
        You understand and acknowledge that you are responsible for any data you submit to the Site or
        Services, and you, not Company, have full responsibility for such content, including its
        legality, reliability, accuracy, and appropriateness.
      </span>
    </Content>
    <Heading>
      9. Third Party Services
    </Heading>

    <Content>
      <span>
        The Services may include services, content, and information owned, made available, or otherwise
        licensed by a third party (“Third-Party Services”) or contain links to Third Party Services. We
        do not control, endorse or adopt any Third Party Content and have no responsibility for Third
        Party Content, including, without limitation, material that may be misleading, incomplete,
        erroneous, offensive, indecent or otherwise objectionable in your jurisdiction. The integration
        or inclusion of such Third-Party Services does not constitute or imply any endorsement or
        recommendation. In addition, your dealings or correspondence with such third parties are solely
        between you and the third party. We are not responsible or liable for any loss or damage of any
        sort incurred as a result of any such dealings and your use of Third Party Content is at your
        own risk.
      </span>
      <br />
      <br />
      <span>
        Ancient8 makes no representations and excludes all warranties and liabilities arising out of or
        pertaining to such Third Party Services, including its accuracy or completeness.
      </span>
      <br />
      <br />
      <span>
        All intellectual property rights in and to Third-Party Services are the property of the
        respective third parties.
      </span>
    </Content>
    <Heading>
      10. Limitation of Liability
    </Heading>

    <Content>
      <span>
        IN NO EVENT SHALL COMPANY, ITS AFFILIATES AND SERVICE PROVIDERS, OR ANY OF THEIR RESPECTIVE
        SHAREHOLDERS, MEMBERS, OFFICERS, DIRECTORS, ATTORNEYS, AGENTS, EMPLOYEES OR REPRESENTATIVES,
        SUPPLIERS OR CONTRACTORS BE LIABLE FOR ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT,
        INTANGIBLE, OR CONSEQUENTIAL LOSSES OR DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE,
        STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH AUTHORIZED OR UNAUTHORIZED
        USE OF THE SITE, ANY PERFORMANCE OR NON-PERFORMANCE OF THE SERVICES, OR THIS AGREEMENT, EVEN IF
        AN AUTHORIZED REPRESENTATIVE OF COMPANY HAS BEEN ADVISED OF, KNEW OF, OR SHOULD HAVE KNOWN OF THE
        POSSIBILITY OF SUCH DAMAGES. FOR EXAMPLE (AND WITHOUT LIMITING THE SCOPE OF THE PRECEDING
        SENTENCE), YOU MAY NOT RECOVER FOR LOST PROFITS, LOST BUSINESS OPPORTUNITIES, OR OTHER TYPES OF
        SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL LOSSES OR DAMAGES. SOME JURISDICTIONS
        DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE
        LIMITATION MAY NOT APPLY TO YOU.
      </span>
      <br />
      <br />
      <span>
        UNDER NO CIRCUMSTANCES SHALL WE BE LIABLE TO YOU FOR ANY DAMAGES, LOSSES OR CAUSES OF ACTION
        EXCEEDING ONE HUNDRED UNITED STATES DOLLARS (US$100).
      </span>
      <br />
      <br />
      <span>
        COMPANY SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES CAUSED IN WHOLE OR IN PART BY (A)
        UNSUPPORTED SOFTWARE OR HARDWARE; (B) THE MALFUNCTION, UNEXPECTED FUNCTION OR UNINTENDED FUNCTION
        OF ANY COMPUTER OR CRYPTOCURRENCY NETWORK, INCLUDING WITHOUT LIMITATION LOSSES ASSOCIATED WITH
        NETWORK FORKS, REPLAY ATTACKS, DOUBLE-SPEND ATTACKS, SYBIL ATTACKS, 51% ATTACKS, GOVERNANCE
        DISPUTES, MINING DIFFICULTY, CHANGES IN CRYPTOGRAPHY OR CONSENSUS RULES, HACKING OR CYBERSECURITY
        BREACHES; (C) THE CHANGE IN VALUE OF ANY DIGITAL ASSET; (D) ANY CHANGE IN LAW, REGULATION OR
        POLICY, OR (E) FORCE MAJEURE EVENT. THIS LIMITATION OF LIABILITY IS INTENDED TO APPLY WITHOUT
        REGARD TO WHETHER OTHER PROVISIONS OF THIS AGREEMENT HAVE BEEN BREACHED OR HAVE PROVEN
        INEFFECTIVE.
      </span>
    </Content>
    <Heading>
      11. Intellectual Property
    </Heading>

    <Content>
      <span>
        Unless otherwise indicated by us, The Ancient8 Platform and all Ancient8 Services, including their
        design elements or concepts and all other present and future intellectual property rights and
        rights in the nature of intellectual property rights that exist in or in relation to the use and
        access including, but not limited to, all trademarks, are the property of Ancient8 or our
        licensors or suppliers and are protected by applicable intellectual property laws. Unless
        otherwise expressly provided, we do not give any implied license for the use of the contents of
        the Site or the Services.
      </span>
      <br />
      <br />
      <span>
        You accept and acknowledge that the material and content contained in or delivered by the Site or
        the Services is made available for your personal, lawful, non-commercial use only and that you may
        only use such material and content for the purpose of using the Site or the Services as set forth
        in this agreement.
      </span>
      <br />
      <br />
      <span>
        You further acknowledge that any other use of content from the Site or the Services is strictly
        prohibited and you agree not to infringe or enable others to infringe our intellectual property
        rights. You agree to retain all copyrighted and other proprietary notices contained in the
        materials provided via the Site or the Services on any copy you make of the material but failing
        to do so shall not prejudice Company’s intellectual property rights therein.
      </span>
      <br />
      <br />
      <span>
        You may not sell or modify materials derived or created from the Site or the Services or
        reproduce, display, publicly perform, distribute or otherwise use the materials in any way for any
        public or commercial purpose. Your use of such materials on any other website or on a
        file-sharing or similar service for any purpose is strictly prohibited. You may not copy any
        material or content derived or created from the Site or the Services without our express, written
        permission.
      </span>
      <br />
      <br />
      <span>
        Any rights not expressly granted herein to use the materials contained on or through the Site or
        the Services are reserved by Company in full.
      </span>
    </Content>
    <Heading>
      12. Indemnification
    </Heading>

    <Content>
      <span>
        You agree to indemnify and hold harmless Company, its affiliates subsidiaries and their respective
        shareholders, directors, managers, members, officers, suppliers, contractors and employees from
        any and all potential or actual claims, demands, actions, proceedings, investigations, suits,
        damages, losses, costs or expenses, including without limitation, reasonable legal fees, fines or
        penalties arising out of or relating to your or any other person’s use of your credentials or User
        Account in connection with: (a) use of the Site or Services; (b) breach of these Terms of Service
        or any other policy; (c) feedback or submissions you provide; (d) false, incomplete, or misleading
        information relied upon by us to verify your identity and source of funds, where applicable; or
        (e) violation of any rights of any other person or entity; provided however, that you shall not
        indemnify Company for claims or losses arising out of Company’s gross negligence or willful
        misconduct.
      </span>
      <br />
      <br />
      <span>
        This indemnity shall apply to your successors and assigns and shall survive any termination or
        cancellation of this agreement.
      </span>
    </Content>
    <Heading>
      13. Jurisdiction and Governing Law
    </Heading>

    <Content>
      <span>
        All matters relating to the Website and these Terms of Service and any dispute or claim arising
        therefrom or related thereto (in each case, including non-contractual disputes or claims), shall
        be governed by and construed in accordance with the laws of the British Virgin Islands. For
        litigation arising from this Agreement, the Parties submit to the exclusive jurisdiction of the
        arbitration in the British Virgin Islands. Furthermore, if any arbitration is necessary to enforce
        the terms of this Agreement, the prevailing party will be entitled to reasonable attorneys' fees
        and costs.
      </span>
      <br />
      <br />
      <span>
        EXCEPT WHERE PROHIBITED BY APPLICABLE LAW, YOU AGREE THAT ANY CLAIM YOU MAY HAVE AGAINST US
        SHALL BE BROUGHT INDIVIDUALLY AND YOU SHALL NOT JOIN SUCH CLAIM WITH CLAIMS OF ANY OTHER PERSON
        OR ENTITY OR BRING, JOIN, OR PARTICIPATE IN A CLASS ACTION AGAINST US. YOU FURTHER AGREE TO
        EXPRESSLY WAIVE YOUR RIGHT TO A TRIAL BY JURY.
      </span>
      <br />
      <br />
      <span>
        ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF SERVICE
        OR THE SERVICES OR SITE MUST BE COMMENCED WITHIN ONE YEAR AFTER THE CAUSE OF ACTION ACCRUES,
        OTHERWISE, SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
      </span>
    </Content>
    <Heading>
      14. Confidential Information
    </Heading>

    <Content>
      <span>
        <strong>Definition.</strong> Each party to these Terms (a "Receiving Party") may have access to,
        or become acquainted with, certain non-public confidential information of the other party
        (a "Disclosing Party") including without limitation all information clearly identified as
        confidential at the time of disclosure (“Confidential Information”). You and Company further
        agree that, subject to the rights and licenses granted herein, each party's Confidential
        Information shall include all non-public information regarding the Disclosing party, including
        without limitation any customer, customer prospect, the terms, conditions and pricing set forth
        in any agreement and its Order Form(s), marketing, technical, business and/or strategic plans or
        information provided by the Disclosing Party to the Receiving party in the performance of the
        Services under the Agreement.
      </span>
      <br />
      <br />
      <span>
        <strong>Use and Disclosure.</strong> Each party agrees as follows: (a) to use the Confidential
        Information of the Disclosing Party only for the purposes permitted by the Agreement, or as
        otherwise permitted by the Agreement; (b) to take all reasonable steps to ensure that the
        Disclosing Party’s Confidential Information is not disclosed or distributed by the Receiving
        Party’s employees or agents in violation of the Agreement, but in no event will either party use
        less effort to protect the Confidential Information of the Disclosing Party than it uses to
        protect its own Confidential Information of like importance; (c) to restrict access to the
        Confidential Information disclosed by the Disclosing Party to such of the Receiving Party’s
        employees, agents and third parties, if any, who have a need to have access and who have been
        advised of and have agreed in writing or are otherwise bound to treat such information in
        accordance with the Agreement; and (d) to return or destroy all Confidential Information of the
        Disclosing Party’s written request, after termination of the Agreement. The Receiving Party will
        not be obligated under this confidentiality section with respect to information that: (a) is or
        has become readily publicly available through no act or omission of the Receiving Party or its
        employees or agents; (b) is received from a third party lawfully in possession of such
        information and the Receiving Party has no knowledge of any disclosure restrictions on such third
        party to disclose such information; (c) is disclosed to a third party by the Disclosing Party
        without restriction on disclosure; (d) was rightfully in the possession of the Receiving Party
        without restriction prior to its disclosure by the Disclosing Party; or (e) was independently
        developed by employees or consultants of the Receiving Party without reliance on, or reference
        to, such Confidential Information.
      </span>
      <br />
      <br />
      <span>
        <strong>Permitted Disclosures.</strong> Notwithstanding the foregoing, Confidential Information
        may be disclosed as required by any governmental agency, provided that before disclosing such
        information the Disclosing Party must provide the Receiving Party with sufficient advance notice
        of the agency’s request for the information to enable the Receiving Party to exercise any rights
        it may have to challenge or limit the agency’s authority to receive such Confidential
        Information, to the extent permitted by applicable law.
      </span>
    </Content>
    <Heading>15. Miscellaneous</Heading>
    <Content>
      <span>
        <strong>Force Majeure.</strong> If by reason in whole or in part of any Force Majeure Event, either you or Company is delayed or prevented from complying with these Terms of Service, then such delay or non-compliance shall not be deemed to be a breach and no loss or damage shall be claimed by you or Company by reason thereof. "Force Majeure Event" means any event beyond the party’s reasonable control, including, but not limited to, flood, extraordinary weather conditions, earthquake, or other act of God, fire, war, insurrection, riot, labor dispute, accident, action of government, communications, power failure, failure in bank performance, or equipment or software malfunction including network splits or "forks" or unexpected changes in a computer network upon which the Services rely.
      </span>
      <br />

      <span>
        You agree to indemnify and hold harmless Ancient8, its affiliates, subsidiaries, licensors, and their respective directors, officers, members, managers, employees, and agents from and against any and all claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party claim to the extent arising from or connected with an allegation that your use of the Services in accordance with these Terms infringes any rights of a third party.
      </span>
      <br />

      <span>
        <strong>Taxes.</strong> It is your responsibility to determine what, if any, taxes apply due to your use of the Services, and it is your responsibility to report and remit the correct tax to the appropriate tax authority. Company is not responsible for determining and will not advise whether taxes apply to your use of the Services.
      </span>
      <br />

      <span>
        <strong>Severability and Reformation.</strong> In the event that any provision of these Terms of Service is unenforceable under applicable law, the validity or enforceability of the remaining provisions will not be affected. To the extent any provision of these Terms of Service is judicially determined to be unenforceable, a court of competent jurisdiction may reform any such provision to make it enforceable.
      </span>
      <br />

      <span>
        <strong>Waiver.</strong> No waiver by Company of any term or condition set forth in these Terms of Service shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under these Terms of Service shall not constitute a waiver of such right or provision.
      </span>
      <br />

      <span>
        <strong>Assignment.</strong> These Terms of Service shall be binding on your successors, heirs, personal representatives, and assigns. You may not assign or transfer any of your rights or obligations without prior written consent of Company, which may be withheld in Company’s sole discretion. We may assign rights or delegate duties under these Terms of Service in our sole discretion.
      </span>
      <br />

      <span>
        <strong>Relationship of the Parties.</strong> Nothing in this agreement is intended to, nor shall create any partnership, joint venture, agency, consultancy or trusteeship. You and Company are independent contractors for purposes of this agreement.
      </span>
      <br />

      <span>
        <strong>Contact Information.</strong> You may contact us via{" "}
        <a
          href="mailto:support@ancient8.gg"
          className="text-blue-600 underline"
        >
          support@ancient8.gg
        </a>
      </span>
      <br />
    </Content>
  </div>
}

/**
 * update content or something, pls update version
 */
const VERSION = '1.0.0'

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  const [atBottom, setAtBottom] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      const isAtBottom =
        el.scrollHeight - el.scrollTop <= el.clientHeight + 1
      setAtBottom(isAtBottom)
    }

    el.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const disclaimer = localStorage.getItem("disclaimer");

    if (!disclaimer || disclaimer !== VERSION) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimer", VERSION);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      closable={false}
      maskClosable={false}
      footer={null}
      className={cn(
        "[&_.ant-pkg-modal-content]:!bg-[#171819]",
        "[&_.ant-pkg-modal-content]:!text-white",
        "[&_.ant-pkg-modal-content]:!rounded-[16px]",
        "[&_.ant-pkg-modal-content]:!border",
        "[&_.ant-pkg-modal-content]:!border-white/10",
        "[&_.ant-pkg-modal-content]:!h-[600px]",
        "[&_.ant-pkg-modal-content]:sm:!p-5"
      )}
    >

      <h2 className="text-[18px] text-[#CEFF70] text-left sm:text-base font-bold mb-6 sm:mb-5">
        Disclaimer & Terms of Service
      </h2>

      <div className="flex flex-col gap-5 flex-1 mb-5">
        {/* scrollable content */}
        <div className="relative h-[342px] sm:h-[257px]">
          <div
            ref={scrollRef}
            className={cn("overflow-y-auto scroller", "pr-4 sm:pr-1", "h-[342px] sm:h-[257px]")}
          >
            <Terms />
          </div>
          {!atBottom && (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[84px] bg-[linear-gradient(180deg,rgba(10,15,6,0)_0%,#171819_100%)]" />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 pr-4 sm:pr-1">
        <p className="text-base leading-[1.5] tracking-[0.2] text-[#FFFFFFE5] italic font-normal sm:!text-[14px]">
          By clicking accept, you here by acknowledge that you have read and accept the{" "}
          <a
            className="text-[#CEFF70] font-bold italic underline sm:text-[14px]"
            href="https://docs.ancient8.gg/policies/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ancient8 Disclaimer & Terms of Service
          </a>
        </p>

        <Button className={cn("bg-[#D8FF76] sm:w-full sm:text-center", "!h-[45px] sm:!h-[40px] sm:!px-0")} size="sm" onClick={handleAccept}>
          <p className="text-base text-[#072B09] font-medium sm:!text-[14px]">I have read and accpet the Terms of Service</p>
        </Button>
      </div>
    </Modal>
  );
}
