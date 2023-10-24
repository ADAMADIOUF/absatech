import React from 'react'
import {
  FaBullhorn,
  FaDesktop,
  FaPalette,
  FaPencilAlt,
  FaPrint,
  FaSearch,
  FaShareSquare,
  FaSlideshare,
  FaCamera,
  FaFilePdf,
  FaFileAlt,
  FaAd,
  FaVideo,
} from 'react-icons/fa'

function Services() {
  return (
    <div className='services section-center' id='services'>
      <div className='title'>
        <h3>What Solutions We Provide</h3>
      </div>
      <div className='container-services'>
        <article>
          <span className='icons-services'>
            <FaSearch />
          </span>
          <h3>SEO Optimization</h3>
          <p>
            SEO optimization is the process of improving a website's visibility
            in search engine results. It involves optimizing on-page and
            off-page elements to rank higher in search engine rankings and
            attract more organic traffic to your website.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaPencilAlt />
          </span>
          <h3>Custom Graphics and Illustrations</h3>
          <p>
            Use Canva Pro to create custom graphics and illustrations for
            websites, mobile apps, social media posts, or marketing materials.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaPalette />
          </span>
          <h3>Branding and Logo Design</h3>
          <p>
            Design or enhance logos and branding materials for businesses and
            startups.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaShareSquare />
          </span>
          <h3>Social Media Graphics</h3>
          <p>
            Create eye-catching graphics for social media platforms, including
            profile images, cover photos, and post images.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaPalette />
          </span>
          <h3>Web Design Elements</h3>
          <p>
            Design custom icons, buttons, banners, and other web design elements
            for websites and web applications.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaPrint />
          </span>
          <h3>Print Materials</h3>
          <p>
            Design print materials such as business cards, flyers, brochures,
            posters, and more.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaBullhorn />
          </span>
          <h3>Marketing Materials</h3>
          <p>
            Create marketing materials, including infographics, newsletters, and
            email templates.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaDesktop />
          </span>
          <h3>UI/UX Design</h3>
          <p>
            Design user interfaces and user experience elements for web and
            mobile applications.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaSlideshare />
          </span>
          <h3>Presentation Design</h3>
          <p>
            Help clients create compelling presentations with well-designed
            slides.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaCamera />
          </span>
          <h3>Photo Editing</h3>
          <p>
            Enhance and retouch photos for clients, improving the quality of
            their images.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaFilePdf />
          </span>
          <h3>Ebook and PDF Design</h3>
          <p>Create visually appealing ebooks and PDF documents.</p>
        </article>
        <article>
          <span className='icons-services'>
            <FaFileAlt />
          </span>
          <h3>Custom Templates</h3>
          <p>
            Build custom templates for clients to use across various platforms,
            ensuring brand consistency.
          </p>
        </article>
        <article>
          <span className='icons-services'>
            <FaAd />
          </span>
          <h3>Social Media Ad Campaigns</h3>
          <p>Design ad creatives for social media advertising campaigns.</p>
        </article>
        <article>
          <span className='icons-services'>
            <FaVideo />
          </span>
          <h3>Video Thumbnails and Graphics</h3>
          <p>
            Create video thumbnails and graphics for YouTube and other video
            platforms.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Services
