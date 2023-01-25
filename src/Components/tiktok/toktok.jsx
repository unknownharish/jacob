import React, { useEffect } from 'react'


function TikTokEmbed({ videoUrl }) {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://www.tiktok.com/embed.js'
        script.async = true
        document.body.appendChild(script)
        u
        script.onload = () => {
            const tikTokEmbed = new window.TikTokEmbed()
            tikTokEmbed.embed('tiktok-embed', videoUrl)
        }
        return () => {
            document.body.removeChild(script)
        }
    }, [videoUrl])

    return <div id="tiktok-embed"></div>
}

export default TikTokEmbed
