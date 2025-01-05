type Social = 'twitter' | 'facebook' | 'instagram'

interface SocialLink {
  name: Social
  link: string
}

export { Social, SocialLink }
