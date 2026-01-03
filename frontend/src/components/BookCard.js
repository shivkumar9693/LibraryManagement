import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
  color: #1f2937;
  font-weight: 600;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const EditButton = styled(Button)`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }
`;

const DeleteButton = styled(Button)`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  }
`;

const ReadButton = styled(Button)`
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  width: 100%;

  &:hover {
    background: linear-gradient(135deg, #059669 0%, #047857 100%);
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
