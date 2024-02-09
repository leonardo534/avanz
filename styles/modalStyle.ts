import { StyleSheet } from "react-native";

export const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    width: '100%',
  },
  commentText: {
    fontSize: 14,
    marginBottom: 8,
  },
  repliesContainer: {
    marginLeft: 16,
  },
  replyContainer: {
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
  },
  replyText: {
    fontSize: 12,
    color: '#555',
  },
  closeButton: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
  },
});


