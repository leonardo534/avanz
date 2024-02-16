import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  type: {
    fontSize: 14,
    marginBottom: 5,
    color: 'green',
  },
  typeMachine: {
    fontSize: 14,
    marginBottom: 5,
    color: 'blue',
  },
  actionsContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '90%',
  },
  listContainer: {
    padding: 20,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  likeButton: {
    padding: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row', 
    gap: 15,
  },
  iconButtonTrash: {
    position: 'absolute',
    right: 0,
    padding: 20,
    zIndex: 1,
  },
  commentText: {
    fontSize: 16,
    marginBottom: 5,
  },
  messageComment: {
    fontSize: 16,
    textAlign: 'center',   
    paddingTop: 10,
  },
  commentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  repliesContainer: {
    marginLeft: 20,
  },
  replyContainer: {
    marginBottom: 5,
  },
  replyText: {
    fontSize: 14,
    color: 'gray',
  },
  likeButtonComment: {
    display: 'flex',
    flexDirection: 'row'  
  },
});


