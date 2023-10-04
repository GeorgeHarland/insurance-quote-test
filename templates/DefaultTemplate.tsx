import WebsiteHeader from "@/components/websiteHeader";
import headerData from './../data/header.json'

const DefaultTemplate = ({children}: { children: React.ReactNode}) => (
  <div><WebsiteHeader {...headerData}/>{children}</div>
)

export default DefaultTemplate;
