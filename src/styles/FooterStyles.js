
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #f8a9bb;
  color: #333;
  padding: 20px 0;
  border-top: 2px solid #fcd9df;
  margin-top: auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  font-size: 1.5rem;
  

  a {
    color: #333;
    transition: color 0.3s;

    &:hover {
      color: #a94442;
    }
  }
`;
