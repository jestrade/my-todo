import styled from "styled-components";

export const TodoItemListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

export const TodoItemContent = styled.span`
  flex: 1;
  margin-right: 16px;
`;

export const TodoItemDone = styled.span`
  width: 80px;
  color: ${props => props.children ? '#4CAF50' : '#F44336'}
`;

export const TodoItemCreatedAt = styled.span`
  width: 160px;
  color: #666;
  font-size: 0.9em;
`;

export const TodoItemUpdatedAt = styled.span`
  width: 160px;
  color: #666;
  font-size: 0.9em;
`;

export const TodoItemDelete = styled.button`
  padding: 8px;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Button = styled.button`
  --primary-color: gray;
  --secondary-color: white;

  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--primary-color);
  background: var(--primary-color);
  color: var(--secondary-color);
  display: inline-block;
  transition: all 200ms ease-in-out;
  padding: 8px;

  &:hover {
    filter: brightness(0.85);
  }
`;