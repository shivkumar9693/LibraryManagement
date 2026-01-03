import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ImageWrapper = styled.div`
  height: 220px;
  overflow: hidden;
  background: #f3f4f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.2rem;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  color: #1f2937;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  height: 48px;
  overflow: hidden;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: none;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const EditButton = styled(Button)`
  background: #3b82f6;
  color: white;

  &:hover {
    background: #2563eb;
  }
`;

const DeleteButton = styled(Button)`
  background: #ef4444;
  color: white;

  &:hover {
    background: #dc2626;
  }
`;

const ReadButton = styled(Button)`
  background: #10b981;
  color: white;

  &:hover {
    background: #059669;
  }
`;

const BookCard = ({ book, isAdmin, onEdit, onDelete, onRead }) => {
    return (
        <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <ImageWrapper>
                <img
                    src={book.image || "https://via.placeholder.com/300x200"}
                    alt={book.title}
                />
            </ImageWrapper>

            <Content>
                <Title>{book.title}</Title>
                <Description>{book.description}</Description>

                <Actions>
                    {isAdmin ? (
                        <>
                            <EditButton onClick={() => onEdit(book)}>Edit</EditButton>
                            <DeleteButton onClick={() => onDelete(book.id)}>
                                Delete
                            </DeleteButton>
                        </>
                    ) : (
                        <ReadButton onClick={() => onRead(book.id)}>Read</ReadButton>
                    )}
                </Actions>
            </Content>
        </Card>
    );
};

export default BookCard;
