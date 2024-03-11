export default function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase()
  return /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent)
}